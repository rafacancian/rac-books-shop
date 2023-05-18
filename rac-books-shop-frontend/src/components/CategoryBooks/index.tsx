import './CategoryBooks.css'
import CardBook from '../CardBook'
import { ICategory } from '../../interfaces/ICategory'
import { useQuery } from '@tanstack/react-query'
import { getBooksByCategory } from '../../http'

interface CategoryBooksProps {
  category: ICategory
}

const CategoryBooks = ({ category }: CategoryBooksProps) => {

  const { data: books } = useQuery(["booksByCategory", category], () => getBooksByCategory(category.id))
  console.log(books)

  return (
    <section className="books">
      {books?.map(book => <CardBook book={book} key={book.id} />)}
    </section>
  )
}

export default CategoryBooks