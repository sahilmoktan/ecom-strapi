import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_PRODUCT } from '../gqlOperation/queries'

const Product = () => {
  const {pid}= useParams()
  const {loading,error,data}=useQuery(GET_PRODUCT,{
    variables:{
      productId:pid
    }
  })

  if (loading) return <h1>loading</h1>
  // if (data) console.log(data)
  if (error) console.log(error)
  const { product } = data.product.data;
  // console.log(pid)
  return (
    <div>
    <h2>{product.attributes.name}</h2>
      <p>{product.attributes.description}</p>
      <h3>{product.attributes.price}</h3>
    {/* Adjust the code to render other product details */}
  </div>
  )
}

export default Product