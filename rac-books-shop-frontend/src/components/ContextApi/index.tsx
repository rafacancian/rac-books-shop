import { ReactElement, createContext, useContext } from "react";
import { IShoppingCart } from "../../interfaces/IShoppingCart";
import { UseGetShoppingCart, UseAddItem, UseRemoveItem } from "../../api/graphql/hooks";
import { IShoppingCartItem } from "../../interfaces/IShoppingCartItem";

export interface IShoppingCartContext {
    shoppingCart?: IShoppingCart
    addItemFunction: (item: IShoppingCartItem) => void
    removeItemFunction: (item: IShoppingCartItem) => void
    loading: boolean
}

export const ShoppingCartContext = createContext<IShoppingCartContext>({
    addItemFunction: () => null,
    removeItemFunction: () => null,
    loading: false
})

interface ShoppingCartProviderProps {
    children: ReactElement
}

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {

    const { data, loading: loadingGetShoppingCart } = UseGetShoppingCart()
    const [addItem, {loading: loadingAddItem}] = UseAddItem()
    const [removeItem, {loading: loadingRemoveItem}] = UseRemoveItem()

    const addItemFunction = (item: IShoppingCartItem) => {
         addItem({
            variables : {
                item: {
                    bookId: item.book.id,
                    optionId: item.option.id,
                    quantity: item.quantity
                }
            }
        })
    }

    const removeItemFunction = (item : IShoppingCartItem) => {
        removeItem({
            variables: {
                item: {
                    bookId: item.book.id,
                    optionId: item.option.id,
                    quantity: item.quantity
                }
            }
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            shoppingCart: data?.shoppingCart,
            addItemFunction,
            removeItemFunction,
            loading : loadingGetShoppingCart || loadingAddItem || loadingRemoveItem
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export const useShoppingCartContext = () => {
    return useContext<IShoppingCartContext>(ShoppingCartContext);
}

export default ShoppingCartProvider