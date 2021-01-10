import React, { createContext, useEffect, useState } from 'react';

import nikonDslr from '../assets/nikondslr.jpg';
import samsungHandfree from '../assets/samsunghandsfree.jpg';
import appleAirpod from '../assets/appleairpod.jpg';
import blueYetti from '../assets/blueyetti.jpg';
import microphone from '../assets/microphone.jpg';
import { nanoid } from 'nanoid';

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