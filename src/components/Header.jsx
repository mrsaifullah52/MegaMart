import React from "react";

const Header = () => {
  return (<header>
    <div className="container">
      <nav>
        <a href="/">MM</a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <div className="cart">
          <a href="#">Cart <span>(0)</span></a>
        </div>
      </nav>
    </div>
  </header>)
}

export default Header;