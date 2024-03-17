import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query getAllproducts($pagination: PaginationArg) {
    products(pagination: $pagination) {
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
      meta {
        pagination {
          pageCount
        }
      }
    
    }
  }
`;

export const GET_PRODUCT = gql`
  query Product($productId: ID) {
    product(id: $productId) {
      data {
        attributes {
          Name
          Price
          Description
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

export const GET_ALL_CATEGORIES = gql`
  query Categories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_CATEGORY = gql`
  query Category($categoryId: ID) {
    category(id: $categoryId) {
      data {
        attributes {
          products {
            data {
              id
              attributes {
                Name
                Price
                Description
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
      }
    }
  }
`;

export const GET_PRODUCT_BY_NAME = gql`
  query Products($filters: ProductFiltersInput) {
    products(filters: $filters) {
      data {
        id
        attributes {
          Name
          Description
        }
      }
    }
  }
`;
