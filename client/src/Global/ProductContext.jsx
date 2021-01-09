import React, { createContext, useState } from 'react';

import nikonDslr from '../assets/nikondslr.jpg';
import samsungHandfree from '../assets/samsunghandsfree.jpg';
import appleAirpod from '../assets/appleairpod.jpg';
import blueYetti from '../assets/blueyetti.jpg';
import microphone from '../assets/microphone.jpg';
import { nanoid } from 'nanoid';

export const ProductContext = createContext();

const ProductContextProvider = (props)=>{
    const [products,setProducts]=useState([{
        "id": nanoid(5),
        "name": "Nikon DSLR Camera",
        "img": nikonDslr,
        "category": "camera",
        "price": 25,
        "status": "Hot"
      },
      {
        "id": nanoid(5),
        "name": "Samsung Handfree",
        "img": samsungHandfree,
        "category": "handfree",
        "price": 45,
        "status": "New"
      },
      {
        "id": nanoid(5),
        "name": "Apple AirPods",
        "img": appleAirpod,
        "category": "handfree",
        "price": 90,
        "status": "Hot"
      },
      {
        "id": nanoid(5),
        "name": "Microphone",
        "img": microphone,
        "category": "micronphone",
        "price": 70,
        "status": "New"
      },
      {
        "id": nanoid(5),
        "name": "Blue Yetti",
        "img": blueYetti,
        "category": "microphone",
        "price": 25,
        "status": "Hot"
      }
      ]);

    return(
        <ProductContext.Provider value={{products,setProducts}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;