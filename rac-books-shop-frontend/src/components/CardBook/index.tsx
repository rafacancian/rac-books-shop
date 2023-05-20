import './CardBook.css'

import {useNavigate } from "react-router-dom"
import { IBook } from "../../interfaces/IBook"
import { Button } from "@mui/material"

interface CardBookProps {
    book: IBook
}

export const formatador = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })

//const obterValorMinimo = (livro: IBook) => {
//    return Math.min(...livro.opcoesCompra.map(op => op.preco))
//}

const CardBook = ({ book }: CardBookProps) => {

    let navigate = useNavigate();

    const handleOnClick = (slug: string) => navigate('/book/' + slug);

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
                <Button variant="contained" size="large" onClick={() => { handleOnClick(book.slug) }}>More details</Button>
            </li>
        </ul>
    </div>)
}

export default CardBook