import { Link } from "react-router-dom"
import GridTitle from "../../components/GridTitle"
import { AbBotao } from "ds-alurabooks"

import "./ShoppingCart.css"
import ShoppingCartItem from "../ShoppintCartItem"
import { GetShoppingCart } from "../../api/graphql/hooks"

const ShoppingCart = () => {

    const { data, loading } = GetShoppingCart()

    return (
        <section className="pagina-carrinho">
            <GridTitle text="My Shopping cart" />
            <div className="conteudo">
                <h4>Itens</h4>
                <div className="itens">
                    {data?.shoppingCart?.itens.map((item, index) =>
                        <ShoppingCartItem key={index} item={item} />)
                    }
                </div>
                <div>
                    <Link to="/">Continue buying</Link>
                </div>
                <footer>
                    <ul>
                        <li>Total</li>
                        <li>
                            <strong>R$0,00</strong></li>
                        <li>
                            <AbBotao texto="Finalize shopping" />
                        </li>
                    </ul>
                </footer>
            </div>
        </section>
    )
}

export default ShoppingCart