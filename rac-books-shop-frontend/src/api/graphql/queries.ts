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

export const GET_SHOPPING_CART = gql`
    query getShoppingCart {
      shoppingCart {
        total,
        itens {
          quantity,
          option {
            price
          }, 
          book {
            title,
            description,
            image
          }
        } 
      }
    }
`

export const SHOPPING_CART_ADD_ITEM = gql`
  mutation addItem($item: ShoppingCartItemInput!) {
    addItem(item: $item)
  }
`