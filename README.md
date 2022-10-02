# Project Name - change to the name of your project

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The challenge of this assignment is to learn how to create API routes with GQL to query the mongodb database.

### User Story

AS AN avid reader  
I WANT to search for new books to read  
SO THAT I can keep a list of books to purchase

### Acceptance Criteria

GIVEN a book search engine  
WHEN I load the search engine  
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
WHEN I click on the Search for Books menu option  
THEN I am presented with an input field to search for books and a submit button  
WHEN I am not logged in and enter a search term in the input field and click the submit button  
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site  
WHEN I click on the Login/Signup menu option  
THEN a modal appears on the screen with a toggle between the option to log in or sign up  
WHEN the toggle is set to Signup  
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button  
WHEN the toggle is set to Login  
THEN I am presented with two inputs for an email address and a password and login button  
WHEN I enter a valid email address and create a password and click on the signup button  
THEN my user account is created and I am logged in to the site  
WHEN I enter my account’s email address and password and click on the login button  
THEN I the modal closes and I am logged in to the site  
WHEN I am logged in to the site  
THEN the menu options change to Search for Books, an option to see my saved books, and Logout  
WHEN I am logged in and enter a search term in the input field and click the submit button  
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account  
WHEN I click on the Save button on a book  
THEN that book’s information is saved to my account  
WHEN I click on the option to see my saved books  
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account  
WHEN I click on the Remove button on a book  
THEN that book is deleted from my saved books list  
WHEN I click on the Logout button  
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/ayeh6/Yeh-Google-Library](https://github.com/ayeh6/Yeh-Google-Library)
- Live Site URL: [https://yeh-google-library.herokuapp.com/](https://yeh-google-library.herokuapp.com/)

## My process

### Built with

- React
- Node
- Express/Apollo
- Javascript

### What I learned

TypeDefs are amazing, the ability to create models, queries and mutations without having to create routes for each path is amazing. It's also pretty neat to be able to select what the most is possible to return, and custom inputs are just great to have to keep the API routes consistent.

```
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
```

### Continued development

As for continued development, I'd work on better error handling to take care of all cases that can happen.

### Useful resources

- [Apollo Docs](https://www.apollographql.com/docs/) - This resource helped me understand how to set up the schema and use the mutations/queries on the client side.

## Author

- Website - [Andrew Yeh](https://ayeh6.github.io/Yeh-Andrew-Portfolio-Website/)
- LinkedIn - [/in/ayeh6](https://www.linkedin.com/in/ayeh6/)
