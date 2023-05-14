import { IBookOption } from "./IBookOption"

export interface IBook {
    id: number
    category: number
    title: string
    slug: string
    description: string
    isbn: string
    pageNumber: number
    publication: string
    image: string
    author: number
    options: IBookOption[]
    about: string
}