import { AbBotao, AbCard } from "ds-alurabooks"
import { useState } from "react"
import { IBook } from "../../interfaces/IBook"

import './GridBooks.css'

interface GridBooksProps {
    books: IBook[]
}

const GridBooks = ({ books }: GridBooksProps) => {

    const [selectedBook, setSelectedBook] = useState<IBook>(books[0])

    return (<section className="LivrosDestaque">
        <div>
            <ul className="livros">
                {books.map(book => {
                    return (
                    <li 
                        key={book.name}
                        onClick={() => setSelectedBook(book)} 
                        className={selectedBook?.name === book.name ? 'selecionado' : ''}
                    >
                        <img src={book.image} alt={`Capa do livro ${book.name} escrito por ${book.author}`} />
                    </li>)
                })}
            </ul>
        </div>
        <AbCard>
            <div className="selecionado-detalhes">
                <header>
                    <h5>Sobre o livro:</h5>
                </header>
                <h6>{selectedBook.name}</h6>
                <p>{selectedBook.description}</p>
                <p>Por: {selectedBook.author}</p>
                <footer>
                    <div className="preco">
                        <em>A partir de:</em>
                        <strong>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(selectedBook.price)}</strong>
                    </div>
                    <div>
                        <AbBotao texto="Comprar" />
                    </div>
                </footer>
            </div>
        </AbCard>
    </section>)

}

export default GridBooks