import React from "react";
import "./App.css";
// importing Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Products from './pages/Products';
import Header from "./components/Header";
// importing Router
import { Route, Switch } from "react-router-dom";
// importing context api
import ProductContextProvider from './Global/ProductContext';
import CartContextProvider from './Global/CartContext';

const App = () => {
  return (

<>                

      <ProductContextProvider>
        <CartContextProvider>
              <Header/> 
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" exact component={Products} />
        
        <Route component={NotFound} />
        </Switch>
</CartContextProvider>
   </ProductContextProvider>
</>

  );
};

export default App;
