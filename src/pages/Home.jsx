import React, { useContext} from "react";
import Hero from "../components/Hero";
import HeroImg from "../assets/hero.jpg";
import Product from "../components/Product";

// context api
import {ProductContext} from '../Global/ProductContext';

const Home = () => {
  // const [data, setData] = useState();

  const data = useContext(ProductContext);
  const {products} = data;
  return (<>
    <Hero banner={HeroImg} />
    <section className="products-wraper">
      <div className="container">
        <h2>Micro Phones</h2>
        <div className="products">
           {products.map((cValue) => { 
           return (<Product data={cValue} key={cValue.id} />); 
          })} 

        </div>
      </div>
    </section>
  </>
  )
}
export default Home;
