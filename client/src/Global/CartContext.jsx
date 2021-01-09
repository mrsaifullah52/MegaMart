import React, { createContext, useReducer } from 'react';
import ReducerComponent from './ReducerComponent';

export const CartContext = createContext();

const CartContextProvider = (props)=> {
    // const [cart,dispatch]=useReducer(ReducerComponent,{ShopingCart:[],qty:0,totalprice:0})
    
    const [cart,dispatch]=useReducer(ReducerComponent,{ShopingCart:[],qty:0,totalprice:0})
  
    return(
        <CartContext.Provider value={{cart,dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;