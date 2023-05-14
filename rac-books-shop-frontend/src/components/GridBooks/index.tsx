import { useEffect, useState } from "react"
import { IBook } from "../../interfaces/IBook"
import Button from '@mui/material/Button';
import './GridBooks.css'
import { AbCard } from "ds-alurabooks";

interface GridBooksProps {
    books: IBook[]
}

const GridBooks = ({ books }: GridBooksProps) => {

    const [selectedBook, setSelectedBook] = useState<IBook>()

    useEffect(() => {
        if (books?.length) {
            setSelectedBook(books[0])
        }
    }, [books])

    const minimumPrice = selectedBook ? Math.min(...selectedBook.options.map(op => op.price)) : 0


    return (<section className="LivrosDestaque">
        <div>
            <ul className="livros">
                {books.map(book => {
                    return (
                        <li
                            key={book.title}
                            onClick={() => setSelectedBook(book)}
                            className={selectedBook?.title === book.title ? 'selecionado' : ''}
                        >
                            <img src={book.image} alt={`Capa do livro ${book.title} escrito por ${book.author}`} />
                        </li>)
                })}
            </ul>
        </div>
        <AbCard>
            <div className="selecionado-detalhes">
                <header>
                    <h5>Sobre o livro:</h5>
                </header>
                <h6>{selectedBook?.title}</h6>
                <p>{selectedBook?.description}</p>
                <p>Por: {selectedBook?.author}</p>
                <footer>
                    <div className="preco">
                        <em>A partir de:</em>
                        <strong>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(minimumPrice)}</strong>
                    </div>
                    <div>
                        <Button variant="contained" size="large">Buy</Button>
                    </div>
                </footer>
            </div>
        </AbCard>
    </section>)

}

export default GridBooks