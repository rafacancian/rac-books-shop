import './CategoryBooks.css'
import CardBook from '../CardBook'
import { ICategory } from '../../interfaces/ICategory'
//import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { TextField } from '@mui/material'
import { GetBooksByCategory } from '../../api/graphql/hooks'

interface CategoryBooksProps {
  category: ICategory
}

const CategoryBooks = ({ category }: CategoryBooksProps) => {

  //const { data: books } = useQuery(["booksByCategory", category], () => getBooksByCategory(category.id))

  const [search, setSearch] = useState("");

  const { data } = GetBooksByCategory(category, search);

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