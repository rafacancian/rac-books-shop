import { gql } from "@apollo/client";

export const GET_BOOKS_BY_CATEGORY = gql`
    query getBooksByCategory($categoryId: Int, $title: String) {
      books(categoryId : $categoryId, title : $title) {
        id,
        slug,
        title,
        image,
        options {
          id,
          price
        } 
      }   
    }
  `