import { IShoppingCartItem } from "./IShoppingCartItem"

export interface IShoppingCart {
    total: number
    itens: IShoppingCartItem[]
}