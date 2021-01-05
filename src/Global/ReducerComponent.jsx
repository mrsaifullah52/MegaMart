import React from 'react';


const ReducerComponent=(state,action)=>{
    let {ShopingCart,qty,totalprice}=state;
    let products,index;

    switch (action.type) {
        case "ADD_TO_CART":{

            let check=ShopingCart.find(product=>product.id===action.id)

            if(check){
                return state;
            }else{
                products = action.item;
                products['qty']=1;
                qty=qty+1;
                totalprice=totalprice+products.price;

                ShopingCart=[...ShopingCart,products];
                return{ShopingCart,qty,totalprice}
            }
        }break;
        case "INC":{
            products = action.item;
            products['qty']=products['qty']+1;
            qty=qty+1;
            totalprice=totalprice + products.price;
            index = ShopingCart.findIndex((item)=>item.id===action.id);
            ShopingCart[index]=products;
            return{ShopingCart,qty,totalprice}
        }
        break;
        case "DEC":{
            products = action.item;
            if(products.qty<=1){
                ShopingCart=ShopingCart.filter(item=>item.id!==action.id)
                qty<0 ? qty=0 : qty=qty-products.qty;
                totalprice=totalprice - products.price;
                return{ShopingCart,qty,totalprice}
            }else{
                products['qty']=products['qty']-1;
                qty=qty-1;
                totalprice=totalprice - products.price;
                index = ShopingCart.findIndex((item)=>item.id===action.id);
                ShopingCart[index]=products;
                return{ShopingCart,qty,totalprice}
            }
        }   
        break;
        case "DEL":{
            products=action.item;
            ShopingCart=ShopingCart.filter( item =>item.id!==action.id);

            qty<0 ? qty=0 : qty=qty-products.qty;
            
            totalprice=totalprice-(products.price*products.qty)
            return{ShopingCart,qty,totalprice};
        }break;

        default:{console.log("error in ReducerComponent")}
    }
}
export default ReducerComponent;