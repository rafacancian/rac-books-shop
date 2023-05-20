import './CategoryBooks.css'
import CardBook from '../CardBook'
import { ICategory } from '../../interfaces/ICategory'
//import { useQuery } from '@tanstack/react-query'
import { getBooksByCategory } from '../../http'
import { gql, useQuery } from '@apollo/client'
import { IBook } from '../../interfaces/IBook'

interface CategoryBooksProps {
  category: ICategory
}

const GET_BOOKS_BY_CATEGORY = gql`
    query getBooksByCategory($categoryId: Int) {
      books(categoryId : $categoryId) {
        id,
        slug,
        title,
        image,
        options {
          id,
          price
        } 
      }   
    }
  `

const CategoryBooks = ({ category }: CategoryBooksProps) => {

  //const { data: books } = useQuery(["booksByCategory", category], () => getBooksByCategory(category.id))

  const { data } = useQuery<{ books: IBook[] }>(GET_BOOKS_BY_CATEGORY, {
    variables: {
      categoryId: category.id
    }
  })

  return (
    <section className="books">
      {data?.books.map(book => <CardBook book={book} key={book.id} />)}
    </section>
  )
}

export default CategoryBooks