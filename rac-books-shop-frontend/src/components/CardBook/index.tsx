import { AbBotao } from "ds-alurabooks"
import { Link } from "react-router-dom"

import './CardBook.css'
import { IBook } from "../../interfaces/IBook"

interface CardBookProps {
    book: IBook
}

export const formatador = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'})

//const obterValorMinimo = (livro: IBook) => {
//    return Math.min(...livro.opcoesCompra.map(op => op.preco))
//}

const CardBook = ( { book } : CardBookProps) => {
    return (<div className="livro" key={book.id}>
        <img src={book.image} alt={book.description} />
        <ul>
            <li>
                <strong>{book.title}</strong>
            </li>
            <li>
                A partir de: <strong>{formatador.format(book.options[0].price)}</strong>
            </li>
            <li className="link-container">
                <Link to={`/livro/${book.title}`}> 
                    <AbBotao texto="Comprar" />
                </Link>
            </li>
        </ul>
    </div>)
}

export default CardBook