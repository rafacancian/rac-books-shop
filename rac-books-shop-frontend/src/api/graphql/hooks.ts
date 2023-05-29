import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { IBook } from "../../interfaces/IBook";
import { GET_BOOKS_BY_CATEGORY, GET_SHOPPING_CART, SHOPPING_CART_ADD_ITEM, SHOPPING_CART_REMOVE_ITEM } from "./queries";
import { booksFilterVar, booksVar } from "./state";
import { IShoppingCart } from "../../interfaces/IShoppingCart";

export const UseGetBooksByCategory = (search: String) => {
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

export const UseGetShoppingCart = () => {
    return useQuery<{ shoppingCart: IShoppingCart }>(GET_SHOPPING_CART)
}

export const UseAddItem = () => {
    return useMutation(SHOPPING_CART_ADD_ITEM, {
        refetchQueries : [
            "getShoppingCart"
        ]
    })
}

export const UseRemoveItem = () => {
    return useMutation(SHOPPING_CART_REMOVE_ITEM, {
        refetchQueries: [
            "getShoppingCart"
        ]
    })
}