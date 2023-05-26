import { AbInputQuantidade } from "ds-alurabooks";
import { IShoppingCartItem } from "../../interfaces/IShoppingCartItem";

import "./ShoppingCartItem.css"

interface ShoppingCartItemProps {
    item: IShoppingCartItem
}

//const { adicionarItemCarrinho, removerItemCarrinho } = useCarrinhoContext()

const changeItem = (quantity: number) => {
    if (quantity === 0) {
        console.log("remove item ")
    }
    console.log("add item")
}


const ShoppingCartItem = ({ item } : ShoppingCartItemProps) => {

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
                <AbInputQuantidade 
                    onChange={(changeItem)}
                />
            </div>
            <div>
                <button className="btn-excluir">
                    lixeira
                </button>
            </div>
        </div>
    )
}

export default ShoppingCartItem