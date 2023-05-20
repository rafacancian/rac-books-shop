

import { AbGrupoOpcao, AbGrupoOpcoes, AbInputQuantidade } from "ds-alurabooks"
import { useState } from "react"
import CategoryTitle from '../../components/CategoryTitle'

import './Book.css'
import { Button } from "@mui/material"
import BookDescription from "../../components/BookDescription"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getBookBySlug } from "../../http"
import Loader from "../../components/Loader"
import GridError from "../../components/GridError"
import { IBook } from "../../interfaces/IBook"
import { AxiosError } from "axios"

const Book = () => {

    const params = useParams()
    let [option, setOption] = useState<AbGrupoOpcao>()

    const { data: book, isLoading, error} = useQuery<IBook | null, AxiosError>(["bookBySlug", params.slug], () => getBookBySlug(params.slug || ""))
    if(isLoading || !book){
        <Loader></Loader>
    }
   
    debugger
    if (error) {
        console.log("Error: " +error.message)
        return <GridError message="Error" subMessage="Maintenance application. Try again later" />
    }

    if(book === null) {
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
                                <AbInputQuantidade />
                            </div>
                            <div>
                                <Button variant="contained" size="large">Buy</Button>
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