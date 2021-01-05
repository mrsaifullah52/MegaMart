import React, { useContext,useEffect} from "react";
// material
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

// context api
import {CartContext} from '../Global/CartContext';


const Cart = () => {
    const {cart,dispatch}=useContext(CartContext);
    let {ShopingCart,qty,totalprice} = cart;

    const Trow=()=>{
        return(<div className="cart_product">
                <span style={{fontWeight:"bold"}}>Quantity: {qty}, Total Bill: ${totalprice}.00</span>
                {ShopingCart.map(item=>
                    <div className="cart_container" key={item.id}>
                        <span className="item_img">
                            <img src={item.img} alt={item.name}/>
                        </span>
                        <span className="item_name">
                            {item.name}
                        </span>
                        <span className="item_price">
                            ${item.price}.00  
                        </span>
                        <span className="item_qty">
                            <AddRoundedIcon className="inc" onClick={()=>{
                                dispatch({type:"INC",id:item.id,item})
                                console.log(item.id);
                            }} style={{ color: green[500] }} />
                                <span className="qty">{item.qty}</span>
                            <RemoveRoundedIcon className="dec" onClick={()=>{
                                dispatch({type:"DEC",id:item.id,item})
                            }} style={{ color: red[500] }} />
                        </span>
                        <span className="item_subtotal">
                            Sub Total: ${item.price*item.qty}.00
                        </span>
                        <span className="item_button">
                            <DeleteForeverRoundedIcon className="del" style={{ color: red[500] }} onClick={()=>{dispatch({type:"DEL",id:item.id,item})}}>X</DeleteForeverRoundedIcon>
                        </span>
                    </div>
                )}
        </div>);
    }

    useEffect(()=>{
        <Trow/>
    },[ShopingCart]);

    return (
        <>
            <div className="container cart">
                    <h1 style={{ marginTop: "50px ", textAlign: "center" }}>Shoping Cart</h1>

                    {ShopingCart.length>=1?
                    <Trow/>
                    :"No Items"}
                
            </div>
        </>
    )
}

export default Cart;

