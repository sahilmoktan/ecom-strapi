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

//error debugged by 
- yarn add @strapi/plugin-graphql@4.20.5  // for graphql strapi
- yarn add stripe // both in server, is used for debitCard system :resolved last issue, 
- - note: strapi is headless cms: stripe for payment card system management

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
//for client
- yarn add @stripe/react-stripe-js @stripe/stripe-js

// "react-dom": "^18.2.0"
// "react-scripts": "4.0.3",
conflict on dependency by @stripe
now retrived 😣😣




### Cloudinary
- now here our uploaded images are saved in local public storage
- so we use cloudinary to store image and get img url
- npm i @strapi/provider-upload-cloudinary  //on server
- set Provider Configuration on  ./config/plugins.js

### deployment backend (skip)
- setup env
- set cloudinary for image management
- deploying on heroku
- first login and other steps

- heroku dont support sql so 
- - heroku addons:create heroku-postgresql:hobby-dev 

 - - heroku headace, hosting server decide to render on render.com

 ## [Render](https://dashboard.render.com/d/dpg-cnrjgdgl5elc73b27tf0-a)
 - create account/ create project
 - create postgreSQl giv names for db under connection tab
 - same configration can be used in .env dbhost, dbport etc
 - also cloudinary configrations as well
 - then push code on git hub, use through pipeline

## after backend deployment
- again we have to create products to show :note not careate fields
- in react we need to change uri pointing towards backend hosted url (helper)
- change image path so we can get form cloudinary as well
