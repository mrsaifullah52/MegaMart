import React,{useContext} from "react";
import { Link } from "react-router-dom";
// reducer
import {CartContext} from '../Global/CartContext';
// material icon
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import StoreRoundedIcon from '@material-ui/icons/StoreRounded';

const Header = () => {
  const {cart}=useContext(CartContext);
  let {qty} = cart;

  return (<header>
    <div className="container">
      <nav>
        <Link to="/" className="brand"><StoreRoundedIcon style={{ color: '#FB8500' }} /></Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/">Contact Us</Link></li>
          <li><Link to="/">About Us</Link></li>
        </ul>
        <div className="cart">
          <ShoppingCartRoundedIcon style={{ color: '#FB8500' }} />
          <Link to="/cart">{qty}</Link>
        </div>
      </nav>
    </div>
  </header>)
}

export default Header;