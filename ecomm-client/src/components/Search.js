import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_PRODUCT_BY_NAME } from "../gqlOperation/queries";
import { Link } from "react-router-dom";

const Search = () => {
const[nameQuery, setNameQuery] = useState("")

const [hideResult,sethideResult] = useState(true)

const [getProduct, { data, loading }] = useLazyQuery(GET_PRODUCT_BY_NAME, {
    variables: {
        //copid from our variable of sandbox
      filters: {
        Name: {
          startsWith: nameQuery,
        },
      },
    },
  });



useEffect(()=>{
    if(nameQuery.length !=0){
        getProduct()
        sethideResult(false)
       } else{
           sethideResult(true)
       }
},[nameQuery])

if (loading) return <h3>loading categories</h3>;


  return (
    <div classNameName="container">
      
        <div className="input-field">
          <input type="search" value={nameQuery} onChange={(e)=>setNameQuery(e.target.value)} required />
          <label className="label-icon">
            <i className="material-icons">search</i>
          </label>
          <i className="material-icons">close</i>
        </div>
      
        <div className="showSuggestion" hidden={hideResult}>
            {
                data &&
                data.products.data.map(({id,attributes})=>{
                    return <Link  key={id} to={`/product/${id}`}> <h6 style={{padding:"20px"}} className="blue white-text">{attributes.Name}</h6> </Link>
                })
            }
        </div>
    </div>
  );
};

export default Search;
