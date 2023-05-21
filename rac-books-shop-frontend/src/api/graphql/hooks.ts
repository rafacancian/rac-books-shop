import { useQuery } from "@apollo/client";
import { IBook } from "../../interfaces/IBook";
import { GET_BOOKS_BY_CATEGORY } from "./queries";
import { ICategory } from "../../interfaces/ICategory";

export const GetBooksByCategory = (category: ICategory, search: String) => {
    return useQuery<{ books: IBook[] }>(GET_BOOKS_BY_CATEGORY, {
        variables: {
            categoryId: category.id,
            title: search
        }
    })
}
