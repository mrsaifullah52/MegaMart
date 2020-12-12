import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroImg from "../assets/hero.jpg";

const Home = () => {
  return (<>
    <Header />
    <Hero banner={HeroImg} />
  </>)
}

export default Home;
