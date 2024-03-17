import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { GET_PRODUCT_BY_CATEGORY } from "../gqlOperation/queries";

const ProductByCategory = () => {
  const { cid } = useParams();
  const { loading, data } = useQuery(GET_PRODUCT_BY_CATEGORY, {
    variables: {
      categoryId: cid,
    },
  });

  if (loading) return <h3>loading categories</h3>;
  return (
    <div>
      <div className="homeroot">
        {data.category.data.attributes.products.data.map(
          ({ id, attributes }) => {
            return (
              <Card
                key={id}
                id={id}
                name={attributes.Name}
                price={attributes.Price}
                description={attributes.Description}
                img={attributes.Images.data[0].attributes.url}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProductByCategory;
