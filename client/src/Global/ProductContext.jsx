import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = (props)=>{
    const [products,setProducts]=useState([]);
      const [productId,setProductId]=useState(0);

      useEffect(()=>{
        const fetchData = async () => {
          try {
              const data = await fetch('http://localhost:4000/products')
              const body = await data.json();
              setProducts(body);
          }catch(err){
            console.log(err)
          }
        }
          fetchData();
        },[productId]);

    return(
        <ProductContext.Provider value={{products,setProducts}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;