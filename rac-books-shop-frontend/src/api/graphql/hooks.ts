import { useQuery, useReactiveVar } from "@apollo/client";
import { IBook } from "../../interfaces/IBook";
import { GET_BOOKS_BY_CATEGORY } from "./queries";
import { ICategory } from "../../interfaces/ICategory";
import { booksFilterVar, booksVar } from "./state";

export const GetBooksByCategory = (search: String) => {
    const filter = useReactiveVar(booksFilterVar)
    useQuery<{ books: IBook[] }>(GET_BOOKS_BY_CATEGORY, {
        variables: {
            categoryId: filter.category?.id,
            title: search
        }, onCompleted(data) {
            if (data.books) {
                booksVar(data.books)
            }
        },
    })
}
