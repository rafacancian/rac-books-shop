import axios from "axios";
import { ICategory } from "../interfaces/ICategory";
import { IBook } from "../interfaces/IBook";

const http = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        Accept: "application/json",
        Content: "application/json"
    }
})

export default http

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