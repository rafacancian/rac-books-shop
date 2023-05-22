import { makeVar } from "@apollo/client";
import { IBook } from "../../interfaces/IBook";
import { ICategory } from "../../interfaces/ICategory";


// reactive var for books
export const booksVar = makeVar<IBook[]>([])

interface IBookFilter {
    category? : ICategory,
    title? : String
}
export const booksFilterVar = makeVar<IBookFilter>({})