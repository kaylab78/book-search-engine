# Book Search Engine
![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
This is a MERN stack application that allows a user to save book searches using the Google Books API.

The starter code for this project was built using RESTful API, and the purpose of the project was to refactor this working app to be a GraphQL API built with Apollo Server.

View the deployed application at [https://lit-eyrie-02583.herokuapp.com/](https://lit-eyrie-02583.herokuapp.com/).

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)
- [Credits](#credits)

## Installation
In order to use this project, the user must have Node.js installed on their local machine.

To clone the repository, type `git clone git@github.com:kaylab78/book-search-engine.git` in the command-line interface.

Once the repository is cloned, use `npm i` to install the required packages.

## Usage
When the user visits the app for the first time, they can search for books using the search field. However, they can't save their book search. In order to save their book search, they must sign up for an account.

Once the user completes the fields necessary to sign up for the app, they can save their book(s) to their account. They can view their saved books and delete books, as needed. The user has the ability to log out and log back in again to view their books or search and save more.

![The screen shows a website with a dark header and a white background. The user creates a profile under the name Joey. They user searches for the book "Little Women," and saves the book to their account.](/client/src/assets/screenshot-1.gif)

## Technologies
- [Apollo Server](https://www.apollographql.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Bootstrap](https://getbootstrap.com/)
- [Concurrently](https://www.npmjs.com/package/concurrently)
- CSS
- [Express.js](https://expressjs.com/)
- [GraphQL](https://graphql.org/)
- JavaScript
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Node.js](https://nodejs.dev/en/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [React](https://reactjs.org/)

## License
&copy; 2022 by Kayla Backus

This project is licensed under the MIT license.

[License: MIT License](https://opensource.org/licenses/MIT)

## Credits
Boot Camp Module 21

Boot Camp Tutor Meg Meyers

Mabuyo, M. & Sullivan, M. (2022, June 16). *3. The Input Type.* Side Quest: Intermediate Schema Design. [https://www.apollographql.com/tutorials/side-quest-intermediate-schema-design/the-input-type](https://www.apollographql.com/tutorials/side-quest-intermediate-schema-design/the-input-type)

*Schemas and Types.* (n.d.) GraphQL. Retrieved September 10, 2022, from [https://graphql.org/learn/schema/](https://graphql.org/learn/schema/)

Starter code clones from [https://github.com/coding-boot-camp/solid-broccoli](https://github.com/coding-boot-camp/solid-broccoli).