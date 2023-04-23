import { AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"

import './Home.css'
import Banner from "../../components/Banner"
import GridBooks from "../../components/GridBooks"
import GridTitle from "../../components/GridTitle"
import Newsletter from "../../components/Newsletter"

const Home = () => {
    const [search, setSearch] = useState("")

    const newBooks = [
        {
            author: 'Tárcio Zemel',
            description: 'Técnicas e ferramentas que fazem a diferença nos seus estilos',
            image: '/imagens/livros/css.jpg',
            name: 'CSS Eficiente',
            price: 29.9
        },
        {
            author: 'Sass',
            description: 'Aprendendo pré-processadores CSS',
            image: '/imagens/livros/sass.jpg',
            name: 'Natan Souza',
            price: 29.9
        },
        {
            author: 'Diego Eis',
            description: 'O caminho das pedras para ser um dev Front-End',
            image: '/imagens/livros/frontend.jpg',
            name: 'Guia Front-End',
            price: 29.9
        },
    ]
    const bestSellersBooks = [
        {
            author: 'Thiago da Silva Adriano',
            description: 'Melhore suas aplicações JavaScript',
            image: '/imagens/livros/typescript.jpg',
            name: 'Guia prático de TypeScript',
            price: 29.9
        },
        {
            author: 'Akira Hanashiro',
            description: 'A revolucionária linguagem de consulta e manipulação de dados para APIs',
            image: '/imagens/livros/graphql.jpg',
            name: 'GraphQL',
            price: 29.9
        },
        {
            author: 'Vinícius Carvalho',
            description: 'PostgreSQL',
            image: '/imagens/livros/postgre.jpg',
            name: 'PostgreSQL',
            price: 29.9
        },
    ]

    return (<section className="home">
        <Banner 
            title="The most complete IT books store?" 
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
        <GridBooks books={newBooks}/>
        <GridTitle text="Best Seller"/>
        <GridBooks books={bestSellersBooks}/>
        <Newsletter />
    </section>)
}

export default Home