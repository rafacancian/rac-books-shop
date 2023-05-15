import axios from "axios";
import { ICategory } from "../interfaces/ICategory";

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