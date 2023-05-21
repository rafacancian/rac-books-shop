import './CategoryBooks.css'
import CardBook from '../CardBook'
import { ICategory } from '../../interfaces/ICategory'
//import { useQuery } from '@tanstack/react-query'
import { gql, useQuery } from '@apollo/client'
import { IBook } from '../../interfaces/IBook'
import { useState } from 'react'
import { TextField } from '@mui/material'

interface CategoryBooksProps {
  category: ICategory
}

const GET_BOOKS_BY_CATEGORY = gql`
    query getBooksByCategory($categoryId: Int, $title: String) {
      books(categoryId : $categoryId, title : $title) {
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

  const [search, setSearch] = useState("");

  const { data } = useQuery<{ books: IBook[] }>(GET_BOOKS_BY_CATEGORY, {
    variables: {
      categoryId: category.id,
      title: search
    }
  })

  return (
    <section >
      <form className='search-form'>
        <TextField className='search-textfield' 
          id="outlined-search" label="Search book" type="search" size='small' 
          value={search} 
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(event.target.value);
          }}
        />
      </form>
      <div className="books">
        {data?.books.map(book => <CardBook book={book} key={book.id} />)}
      </div>
    </section>
  )
}

export default CategoryBooks