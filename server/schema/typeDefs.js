const { gql } = require('apollo-server-express');

const typeDefs = gql`

   type User {
      _id: ID
      username: String
      email: String
      bookCount: Int
      savedBooks: [Book]
   }

   input UserInput {
      username: String!
      email: String!
      password: String!
   }

   type Book {
      authors: [String]
      description: String
      bookId: String
      image: String
      link: String
      title: String
   }

   input BookInput {
      authors: [String]
      description: String!
      bookId: String!
      image: String
      link: String
      title: String!
   }

   type Auth {
      token: ID
      user: User
   }

   type Query {
      user(username: String, _id: ID): User
      me: User
   }

   type Mutation {
      addUser(userInput: UserInput!): Auth
      login(userInput: UserInput!): Auth

      saveBook(bookInput: BookInput!): User
      removeBook(bookId: ID!): User
   }
`;

module.exports = typeDefs;