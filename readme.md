# Ecommerce App Tech Stack
| FRONTEND       | BACKEND   |
|----------------|-----------|
| - ReactJS      | - Strapi  |
| - Apollo/Client| - GraphQL |
| - React Router |           |


## befor this repo creation
- yarn create strapi-app ecommerce //creating strapi app (main dir strapi)
- login admin panel
- Created product model, category model
- content manager: product added with details & also image uploded of product
- Setting: set Strapi API for public & authorized user
- successfully fetch json data in grpahql playground data form strapi

### create react app for client site
- npx create-react-app ecom-client (main dir strapi)
- npm i react-router-dom graphql @apollo/client (in ecom-client dir)



### apollo server setting
- in app.js imp "@apollo/client"
- create client
- wrap components by Apolloprovider return from App

### .
- materialize cdn for quick css
- made pages & components

### [ract carousel] (https://github.com/brainhubeu/react-carousel)
- npm i @brainhubeu/react-carousel --legacy-peer-deps  //