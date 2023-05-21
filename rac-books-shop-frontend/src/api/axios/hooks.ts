import { IBook } from "../../interfaces/IBook"
import { ICategory } from "../../interfaces/ICategory"
import { http } from "./http"

export const getCategoryBySlud = async (slug: string) => {
    const response = await http.get<ICategory>("public/categories", {
        params: {
            slug
        }
    })
    return response.data
}

export const getBooksByCategory = async (category: number) => {
    const response = await http.get<IBook[]>("/books", {
        params: {
            category
        }
    })
    return response.data
}

export const getBooksByRelease = async () => {
    const response = await http.get<IBook[]>("/books", {
        params: {
            release: true
        }
    })
    return response.data
}

export const getBooksByBestSellers = async () => {
    const response = await http.get<IBook[]>("/books", {
        params: {
            bestseller: true
        }
    })
    return response.data
}


export const getBookBySlug = async (slug: string) => {
    const response = await http.get<IBook[]>("/books", {
        params: {
            slug: slug
        }
    })
    if (response.data)
        return response.data[0]
    return null
}