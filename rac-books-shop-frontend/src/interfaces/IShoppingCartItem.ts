import { IBook } from "./IBook"
import { IBookOption } from "./IBookOption"

export interface IShoppingCartItem {
    book: IBook
    option: IBookOption
    quantity: number
}