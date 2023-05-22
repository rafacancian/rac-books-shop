import { makeVar } from "@apollo/client";
import { IBook } from "../../interfaces/IBook";

// reactive var for books
export const booksVar = makeVar<IBook[]>([])