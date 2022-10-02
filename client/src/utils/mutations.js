import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($userInput: UserInput) {
   login(userInput: $userInput) {
      token
      user {
         _id
         username
         email
         bookCount
         savedBooks {
            authors
            description
            bookId
            image
            link
            title
         }
      }
   }
}`;

export const ADD_USER = gql`
mutation Mutation($userInput: UserInput) {
   addUser(userInput: $userInput) {
      token
      user {
         _id
         username
         email
         bookCount
         savedBooks {
            authors
            description
            bookId
            image
            link
            title
         }
      }
   }
}`;

export const SAVE_BOOK = gql`
mutation Mutation($bookInput: BookInput) {
   saveBook(bookInput: $bookInput) {
      _id
      username
      email
      bookCount
      savedBooks {
         authors
         description
         bookId
         image
         link
         title
      }
   }
}`;

export const REMOVE_BOOK = gql`
mutation RemoveBook($bookId: ID!) {
   removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
         authors
         description
         bookId
         image
         link
         title
      }
   }
}`;