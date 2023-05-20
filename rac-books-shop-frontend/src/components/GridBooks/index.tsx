import './GridBooks.css'
import { useEffect, useState } from "react"
import { IBook } from "../../interfaces/IBook"
import Button from '@mui/material/Button';
import { AbCard } from "ds-alurabooks";
import { useNavigate } from 'react-router-dom';

interface GridBooksProps {
    books: IBook[]
}

const GridBooks = ({ books }: GridBooksProps) => {

    const [selectedBook, setSelectedBook] = useState<IBook>()
    
    let navigate = useNavigate();
    const handleOnClick = (slug: string) => navigate('/book/' + slug);

    useEffect(() => {
        if (books?.length) {
            setSelectedBook(books[0])
        }
    }, [books])

    const minimumPrice = selectedBook ? Math.min(...selectedBook.options.map(p => p.price)) : 0

    return (
        <section className="LivrosDestaque">
            <div>
                <ul className="livros">
                    {books.map(book => {
                        return (
                            <li
                                key={book.title}
                                onClick={() => setSelectedBook(book)}
                                className={selectedBook?.title === book.title ? 'selecionado' : ''}>
                                <img src={book.image} alt={`Capa do livro ${book.title} escrito por ${book.author}`} />
                            </li>
                        )
                    })}
                </ul>
            </div>
            <AbCard>
                <div className="selecionado-detalhes">
                    <header>
                        <h5>About the book:</h5>
                    </header>
                    <h6>{selectedBook?.title}</h6>
                    <p>{selectedBook?.description}</p>
                    <p>By: {selectedBook?.author}</p>
                    <footer>
                        <div className="preco">
                            <em>From:</em>
                            <strong>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(minimumPrice)}</strong>
                        </div>
                        <div>
                            <Button variant="contained" size="large" onClick={() => { handleOnClick(selectedBook!.slug) }}>More details</Button>
                        </div>
                    </footer>
                </div>
            </AbCard>
        </section>
    )

}

export default GridBooks