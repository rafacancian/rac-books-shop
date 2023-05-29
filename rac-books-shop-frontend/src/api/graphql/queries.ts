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
        id,
        total,
        itens {
          quantity,
          option {
            id,
            price
          }, 
          book {
            id,
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

export const SHOPPING_CART_REMOVE_ITEM = gql`
  mutation removeItem($item: ShoppingCartItemInput!) {
    removeItem(item: $item)
  }
`
