import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCT } from "../gqlOperation/queries";
import Carousel from "@brainhubeu/react-carousel";
import { useCart } from "react-use-cart";

const Product = () => {
  const { pid } = useParams();
  // console.log(pid)

  const{addItem}=  useCart()

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: {
      productId: pid,
    },
  });

  if (loading) return <h1>loading</h1>;
  if (error) console.log(error);
  if (data) console.log(data);

  const { Name, Price, Description, Images } = data.product.data.attributes;

  const addToCart= ()=>{
    addItem({
      id:pid,
      name:Name,
      price:Price,
      img:Images.data[0].attributes.url
    })
  }

  return (
    <div className="container">
      <Carousel plugins={["arrows"]}>
      {
        Images.data.map(({attributes})=>{
          return <img style={{height:"50vh"}} src={attributes.url} alt="" />
        })
      }
      </Carousel>
      <div>
        <h2> {Name}</h2>
        <h5 className="green-text" style={{ fontWeight: "bold" }}>
          {" "}
          $ {Price}
        </h5>
        <p> {Description}</p>
        <button className="btn blue" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
