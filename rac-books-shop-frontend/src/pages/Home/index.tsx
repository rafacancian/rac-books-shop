import { AbCampoTexto } from "ds-alurabooks"
import { useEffect, useState } from "react"

import './Home.css'
import Banner from "../../components/Banner"
import GridBooks from "../../components/GridBooks"
import GridTitle from "../../components/GridTitle"
import Newsletter from "../../components/Newsletter"
import GridTags from "../../components/GridTags"
import axios from "axios"
import { IBook } from "../../interfaces/IBook"

const Home = () => {
    const [search, setSearch] = useState("")

    /*const newBooks = [
        {
            id: 1,
            author: 'Tárcio Zemel',
            description: 'Técnicas e ferramentas que fazem a diferença nos seus estilos',
            image: '/imagens/livros/css.jpg',
            name: 'CSS Eficiente',
            price: 29.9
        },
        {
            id: 2,
            author: 'Sass',
            description: 'Aprendendo pré-processadores CSS',
            image: '/imagens/livros/sass.jpg',
            name: 'Natan Souza',
            price: 29.9
        },
        {
            id: 3,
            author: 'Diego Eis',
            description: 'O caminho das pedras para ser um dev Front-End',
            image: '/imagens/livros/frontend.jpg',
            name: 'Guia Front-End',
            price: 29.9
        },
    ]
    const bestSellersBooks = [
        {
            id: 4,
            author: 'Thiago da Silva Adriano',
            description: 'Melhore suas aplicações JavaScript',
            image: '/imagens/livros/typescript.jpg',
            name: 'Guia prático de TypeScript',
            price: 29.9
        },
        {
            id: 5,
            author: 'Akira Hanashiro',
            description: 'A revolucionária linguagem de consulta e manipulação de dados para APIs',
            image: '/imagens/livros/graphql.jpg',
            name: 'GraphQL',
            price: 29.9
        },
        {
            id: 6,
            author: 'Vinícius Carvalho',
            description: 'PostgreSQL',
            image: '/imagens/livros/postgre.jpg',
            name: 'PostgreSQL',
            price: 29.9
        },
    ]*/

    const [bestSellers, setBestSellers] = useState<IBook[]>([]);

    useEffect(() => {
        console.log("use effect get best sellers")
        axios.get<IBook[]>("http://localhost:8000/public/bestsellers")
            .then(res => setBestSellers(res.data))
            .catch(error => console.log("Get best sellers error: " + error))
    }, [])

    return (<section className="home">
        <Banner 
            title="The most complete IT books" 
            subtitle="Give a up in your carrear with the best IT books" >
            <form className="search">
                <AbCampoTexto 
                    placeholder="What will your next read be?"
                    value={search}
                    onChange={setSearch}
                    darkmode={true}
                    placeholderAlign="center"
                />
            </form>
        </Banner>

        <GridTitle text="Releases"/>
        <GridBooks books={bestSellers ?? []}/>
        <GridTitle text="Best Seller"/>
        <GridBooks books={bestSellers ?? []}/>
        <GridTags></GridTags>
        <Newsletter />
    </section>)
}

export default Home