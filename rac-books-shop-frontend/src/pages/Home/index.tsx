import { AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"

import './Home.css'
import Banner from "../../components/Banner"

const Home = () => {
    const [search, setSearch] = useState("")

    const newBooks = [
        {
            autor: 'Tárcio Zemel',
            descricao: 'Técnicas e ferramentas que fazem a diferença nos seus estilos',
            imagem: '/imagens/livros/css.jpg',
            nome: 'CSS Eficiente',
            preco: 29.9
        },
        {
            autor: 'Sass',
            descricao: 'Aprendendo pré-processadores CSS',
            imagem: '/imagens/livros/sass.jpg',
            nome: 'Natan Souza',
            preco: 29.9
        },
        {
            autor: 'Diego Eis',
            descricao: 'O caminho das pedras para ser um dev Front-End',
            imagem: '/imagens/livros/frontend.jpg',
            nome: 'Guia Front-End',
            preco: 29.9
        },
    ]
    const bestSellersBooks = [
        {
            autor: 'Thiago da Silva Adriano',
            descricao: 'Melhore suas aplicações JavaScript',
            imagem: '/imagens/livros/typescript.jpg',
            nome: 'Guia prático de TypeScript',
            preco: 29.9
        },
        {
            autor: 'Akira Hanashiro',
            descricao: 'A revolucionária linguagem de consulta e manipulação de dados para APIs',
            imagem: '/imagens/livros/graphql.jpg',
            nome: 'GraphQL',
            preco: 29.9
        },
        {
            autor: 'Vinícius Carvalho',
            descricao: 'PostgreSQL',
            imagem: '/imagens/livros/postgre.jpg',
            nome: 'PostgreSQL',
            preco: 29.9
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
    </section>)
}

export default Home