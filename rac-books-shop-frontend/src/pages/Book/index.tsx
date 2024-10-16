

import { AbGrupoOpcao, AbGrupoOpcoes, AbInputQuantidade } from "ds-alurabooks"
import { useState } from "react"
import CategoryTitle from '../../components/CategoryTitle'

import './Book.css'
import { Alert, Button, Stack } from "@mui/material"
import BookDescription from "../../components/BookDescription"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import Loader from "../../components/Loader"
import GridError from "../../components/GridError"
import { IBook } from "../../interfaces/IBook"
import { AxiosError } from "axios"
import { getBookBySlug } from "../../api/axios/hooks"
import { useShoppingCartContext } from "../../components/ContextApi"
import { Margin } from "@mui/icons-material"

const Book = () => {

    const params = useParams()
    let [option, setOption] = useState<AbGrupoOpcao>()
    const [quantity, setQuantity] = useState(1)
    const { addItemFunction } = useShoppingCartContext()
    const [showAlert, setShowAlert] = useState(false)

    const { data: book, isLoading, error } = useQuery<IBook | null, AxiosError>(["bookBySlug", params.slug], () => getBookBySlug(params.slug || ""))
    if (isLoading || !book) {
        <Loader></Loader>
    }

    if (error) {
        console.log("Error: " + error.message)
        return <GridError message="Error" subMessage="Maintenance application. Try again later" />
    }

    if (book === null) {
        return <GridError message="Info" subMessage="Book not found. Try again" />
    }

    //const [option, setOption] = useState<AbGrupoOpcao>()
    //const [options2, setOption2] = useState<AbGrupoOpcao[]>()
    //setOption2(book?.options)

    const options: AbGrupoOpcao[] = [
        {
            id: 1,
            corpo: "29,90",
            titulo: "E-Book",
            rodape: "pdf, pub, mob"
        }, {
            id: 2,
            corpo: "39,90",
            titulo: "Printed",
            rodape: "pdf"
        }, {
            id: 3,
            corpo: "59,90",
            titulo: "E-Book + Printed",
            rodape: "pdf, pub"
        }
    ]

    function addBookToShoppingCart(): void {
        if (!book) {
            return
        }
        const optionSelected = book.options.find(op => op.id === option?.id)
        if (!optionSelected) {
            return
        }
        addItemFunction({
            book,
            quantity,
            option: optionSelected
        })
        setShowAlert(true)
    }

    return (
        <section className="livro-detalhe">
            <CategoryTitle title="Details about the book" />

            <div>
                <div className="container">
                    <div className="image">
                        <figure>
                            <img src={book?.image} alt={book?.description} />
                        </figure>
                    </div>
                    <div className="detalhes">
                        <h2>{book?.title}</h2>
                        <p>{book?.description}</p>
                        <h3>Select the format:</h3>
                        <div className="opcoes">
                            <AbGrupoOpcoes
                                opcoes={options}
                                onChange={setOption}
                                valorPadrao={option}
                            />
                        </div>
                        <p><strong>*You will keep updated about the future releases of the book</strong></p>
                        <footer>
                            <div className="qtdContainer">
                                <AbInputQuantidade value={quantity} onChange={setQuantity} />
                            </div>
                            <div style={{ display: "flex" }}>
                                <Button variant="contained" size="large" onClick={addBookToShoppingCart}>Buy</Button>
                                {showAlert &&
                                    <Stack sx={{ width: '50%', margin: "0 10px" }} spacing={1}>
                                        <Alert severity="success" color="success"
                                            onClose={() => setShowAlert(false)}>
                                            This is a success alert — check it out!
                                        </Alert>
                                    </Stack>
                                }
                            </div>
                        </footer>

                    </div>
                </div>
                <div>
                    <BookDescription title={book?.title} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                </div>
            </div>
        </section>
    )
}

export default Book