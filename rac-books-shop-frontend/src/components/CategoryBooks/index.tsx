
import { ICategory } from '../../interfaces/ICategory'
import './CategoryBooks.css'
import axios from 'axios'
import { IBook } from '../../interfaces/IBook'
import CardBook from '../CardBook'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { isModuleBlock } from 'typescript'

interface CategoryBooksProps {
    category: ICategory
}

/*const getBooksByCategory = async (category: ICategory) => {

    console.log("chegou no getBooksByCategory")
    console.log("category id ="+category.id)
    let response = await axios.get<IBook[]>('http://localhost:8000/public/books', {
      params: {
        category: category.id
      }
    })
    debugger
    const myObject: IBook[] = response.data as IBook[];
    return myObject;
  }*/

  const myBook: IBook = {
      "id": 1,
      "category": 1,
      "title": "Acessibilidade na Web",
      "slug": "acessibilidade-na-web",
      "description": "Boas práticas para construir sites e aplicações acessíveis",
      "isbn": "978-65-86110-10-4",
      "pageNumber": 246,
      "publication": "2020-04-01",
      "image": "https://raw.githubusercontent.com/viniciosneves/alurabooks/curso-novo/public/imagens/livros/acessibilidade.png",
      "author": 1,
      "options": [
        {
          "id": 1,
          "title": "E-book",
          "price": 29.9,
          "formats": [
            ".pdf",
            ".pub",
            ".mob"
          ]
        },
        {
          "id": 2,
          "title": "Impresso",
          "price": 39.9
        },
        {
          "id": 3,
          "title": "E-book + Impresso",
          "price": 59.9,
          "formats": [
            ".pdf",
            ".pub",
            ".mob"
          ]
        }
      ],
      "about": "Acessibilidade na Web consiste na eliminação de barreiras de acesso em páginas e aplicações digitais para que pessoas com deficiência tenham autonomia na rede. Na verdade, acessibilidade na web beneficia todas as pessoas. Em algum momento da vida todos podem precisar de acessibilidade, seja devido a uma limitação temporária ou permanente. Quando não levamos em consideração o acesso de pessoas com deficiência, estamos tirando o direito de uma pessoa de navegar, interagir ou consumir produtos e serviços na rede. Empatia é o fator principal para que as aplicações que desenvolvemos sejam inclusivas."
    }

const CategoryBooks = ({ category }: CategoryBooksProps) => {

    //const { data: books } = useQuery(['buscaLivrosPorCategoria', category], () => getBooksByCategory(category))
    return <section className="books">
       <CardBook book={myBook} key={1}/>
    </section>
}

export default CategoryBooks