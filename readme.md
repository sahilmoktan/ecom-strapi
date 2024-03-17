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
- materialize icon for icons

### [ract carousel](https://github.com/brainhubeu/react-carousel)
- npm i @brainhubeu/react-carousel --legacy-peer-deps  //

### [react-use-cart](https://github.com/notrab/react-use-cart)
- npm install react-use-cart # yarn add react-use-cart
- - allow us to deal with cart items more easily,
- - cart items stores in local storage
- - calculates all the total cart item prices

### ..............................................
- npm install @stripe/react-stripe-js @stripe/stripe-js --legacy-peer-deps  //for client
- yarn @stripe/react-stripe-js @stripe/stripe-js  //for client

// "react-dom": "^18.2.0"
// "react-scripts": "4.0.3",
conflict on dependency by @stripe
now retrived 😣😣
