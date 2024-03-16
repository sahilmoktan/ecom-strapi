import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_PRODUCTS } from '../gqlOperation/queries'
import Card from '../components/Card'

const Home = () => {
    const {loading,error,data} = useQuery(GET_ALL_PRODUCTS)
    if(loading) return <h2>loading ...</h2>
    if(data){
        console.log(data)
    }
    if(error){console.log(error)}
  return (
    
        <div className='homeroot'>
            {data.products.data.map(({id,attributes})=>{
                return <Card 
                key={id}
                id={id}
                name={attributes.Name}
                price={attributes.Price}
                description={attributes.Description}
                img={attributes.Images.data[0].attributes.url}
                />
            })}
        </div>
    
  )
}

export default Home