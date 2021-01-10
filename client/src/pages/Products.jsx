import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
// import CartContext from '../Global/CartContext';

const Products = ()=>{
  const [st,setSt]=useState([{
    id: 1,
    name:"saif",
    age:22
  }]);
  const [productId,setProductId]=useState(0);

  const {id}=useParams();

  // const {dispatch}=useContext(CartContext);
  
useEffect(()=>{

  const fetchData = async () => {
    try {
        const data = await fetch('http://localhost:4000/products')
        const body = await data.json();
        setSt(body);
    }catch(err){
      console.log(err)
    }
  }
    fetchData();
  },[productId]);

  return(
  <div className="container">
    <div className="products_wraper">
      <div className="products">
        {st.map((product)=>{
          return(
            <div className="product" id={product.id}>
          <div className="img">
            {product.status === "Hot" ? <span id="hot">Hot</span> : <span id="new">New</span>}
            <img src={product.img} alt="product" />
          </div>
          <div className="details">
            <h5>{product.name}</h5>
            <h5>Price: ${product.price}.00</h5>
          </div>
          <div className="addToCart" >
            Add to Cart
          </div>
        </div>)
        })}
      </div>
    </div>


    <div className="params">
      <pre>{JSON.stringify(id)}</pre>
    </div>


  </div>
  );
}

export default Products;