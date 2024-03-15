import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query getAllproducts {
    products {
      data {
        id
        attributes {
          Name
          Description
          Price
          Images {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query Product($productId: ID) {
    product(id: $productId) {
      data {
        id
        attributes {
          name
          price
          description
          images {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
