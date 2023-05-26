import { ReactElement, createContext, useContext } from "react";
import { IShoppingCart } from "../../interfaces/IShoppingCart";
import { GetShoppingCart } from "../../api/graphql/hooks";

export interface IShoppingCartContext {
    shoppingCart?: IShoppingCart
}

export const ShoppingCartContext = createContext<IShoppingCartContext>({

})

interface ShoppingCartProviderProps {
    children: ReactElement
}

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    /*const shoppingCart: IShoppingCart = {
        itens: [],
        total: 0
    }*/

    const { data } = GetShoppingCart()

    return (
        <ShoppingCartContext.Provider value={{ shoppingCart: data?.shoppingCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export const useShoppingCartContext = () => {
    return useContext<IShoppingCartContext>(ShoppingCartContext);
}

export default ShoppingCartProvider