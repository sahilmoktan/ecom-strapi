import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_CATEGORIES } from "../gqlOperation/queries";
import { Link } from "react-router-dom";

const Category = () => {
  const { data, loading } = useQuery(GET_ALL_CATEGORIES);

  if (loading) return <h3>loading categories</h3>;
  

  return <div className="category">
    {
        data.categories.data.map(({id,attributes})=>{
            return <Link to={`/category/${id}`} key={id}>
            <h4  className="chip btn white"> {attributes.name}</h4>
            </Link> 
        })
    }
  </div>;
};

export default Category;
