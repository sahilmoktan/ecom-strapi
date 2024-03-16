import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {isEmpty,items,cartTotal,removeItem}= useCart()
    if(isEmpty) return <h1>Your cart is empty</h1>
    if(items)console.log(items)
  return (
    <div>
        <div className="conatiner row">
        <ul class="collection col m8">
                {
                    items.map(item=>{
                        return(
                          <li class="collection-item avatar">
                            <img src={item.img} class="circle" alt='' />
                            <span class="title truncate">{item.name}</span>
                            <p className="green-text">Price - $ {item.price} x {item.quantity} = ${item.itemTotal}</p>
                            <i onClick={()=>removeItem(item.id)} class="secondary-content material-icons red-text">remove_circle</i>
                        </li>   
                        )
                    })
                }
           
            </ul>
            <div className="col m3 offset-m1" style={{position:"sticky",top:"2px"}}>
            <h2>Total Price</h2>
            <h2>$ {cartTotal}</h2>
            <button className="btn blue">checkout</button>


            </div>
        </div>
    </div>
  )
}

export default Cart