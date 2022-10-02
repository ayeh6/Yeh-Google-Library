import { gql } from '@apollo/client';

export const GET_USER = gql`
query Query($username: String, $id: ID) {
   user(username: $username, _id: $id) {
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

export const GET_ME = gql`
query Query {
   me {
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