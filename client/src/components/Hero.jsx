import React from 'react';

const Hero = (props) => {
  return (<section className="hero">
    <div className="container">
      <div className="banner">
        <div className="img">
          <img src={props.banner} alt="Hero Banner" />
          <h2>Enjoy online shoping with MegaMart</h2>
        </div>
        <div className="img_cover">
        </div>
      </div>
    </div>
  </section>)
}

export default Hero;