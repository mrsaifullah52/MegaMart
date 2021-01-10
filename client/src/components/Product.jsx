import React, { useContext } from 'react';

// reducer
import {CartContext} from '../Global/CartContext';

const Product = (props) => {

  const {dispatch}=useContext(CartContext);

  return (
    <div className="container">
      <div className="product" id={props.data.id}>
    <div className="img">
      {props.data.status === "Hot" ? <span id="hot">Hot</span> : <span id="new">New</span>}
      <img src={props.data.img} alt="product" />
    </div>
    <div className="details">
      <h5>{props.data.name}</h5>
      <h5>Price: ${props.data.price}.00</h5>
    </div>
    <div className="addToCart" onClick={()=>dispatch({type:"ADD_TO_CART",item: props.data,id:props.data.id})}>
      Add to Cart
    </div>
  </div>
    </div>
  )
}
export default Product;