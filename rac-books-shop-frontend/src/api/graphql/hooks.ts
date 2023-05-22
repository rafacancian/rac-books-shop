import { useQuery } from "@apollo/client";
import { IBook } from "../../interfaces/IBook";
import { GET_BOOKS_BY_CATEGORY } from "./queries";
import { ICategory } from "../../interfaces/ICategory";
import { booksVar } from "./state";

export const GetBooksByCategory = (category: ICategory, search: String) => {
    useQuery<{ books: IBook[] }>(GET_BOOKS_BY_CATEGORY, {
        variables: {
            categoryId: category.id,
            title: search
        }, onCompleted(data) {
            if (data.books) {
                booksVar(data.books)
            }
        },
    })
}
