import { AbInputQuantidade } from "ds-alurabooks";
import { IShoppingCartItem } from "../../interfaces/IShoppingCartItem";
import DeleteIcon from '@mui/icons-material/Delete';

import "./ShoppingCartItem.css"
import { useShoppingCartContext } from "../../components/ContextApi";
import { useState } from "react";
import Loader from "../../components/Loader";

interface ShoppingCartItemProps {
    item: IShoppingCartItem
}

const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {

    const { addItemFunction, removeItemFunction, loading } = useShoppingCartContext()
    const [quantity, setQuantity] = useState(1)

    if (loading) {
        return <Loader ></Loader>
    }

    const functionRemoveItem = (item: IShoppingCartItem) => {
        removeItemFunction({
            book: item.book,
            option: item.option,
            quantity: 1
        })
    }

    const changeItemQuantity = (quantity: number) => {
        if (quantity === 0) {
            removeItemFunction({
                book: item.book,
                option: item.option,
                quantity: quantity
            })
        }
        addItemFunction({
            book: item.book,
            option: item.option,
            quantity: quantity
        })
    }

    return (
        <div className="item-carrinho">
            <figure>
                <img src={item.book.image} alt={item.book.description} />
            </figure>
            <div className="detalhes">
                <ul>
                    <li className="titulo">{item.book.title}</li>
                    <li className="descricao">{item.book.description}</li>
                    <li className="autor">Por: {item.book.author}</li>
                </ul>
            </div>
            <div>
                <ul className="preco">
                    <li className="label">
                        <strong>Preço:</strong>
                    </li>
                    <li className="valor">
                        {item.option.price}
                    </li>
                </ul>
            </div>
            <div className="quantidade">
                <AbInputQuantidade value={item.quantity}
                    onChange={(changeItemQuantity)}
                />
            </div>
            <div>
                <button className="btn-excluir" onClick={() => functionRemoveItem(item)}>
                    <DeleteIcon></DeleteIcon>
                </button>
            </div>
        </div>
    )
}

export default ShoppingCartItem