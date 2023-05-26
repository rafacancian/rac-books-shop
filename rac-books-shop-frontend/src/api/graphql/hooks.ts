import { useQuery, useReactiveVar } from "@apollo/client";
import { IBook } from "../../interfaces/IBook";
import { GET_BOOKS_BY_CATEGORY, GET_SHOPPING_CART } from "./queries";
import { ICategory } from "../../interfaces/ICategory";
import { booksFilterVar, booksVar } from "./state";
import { IShoppingCart } from "../../interfaces/IShoppingCart";

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

export const GetShoppingCart = () => {
    return useQuery<{ shoppingCart: IShoppingCart }>(GET_SHOPPING_CART)
}
