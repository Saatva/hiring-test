import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext";

const Nav = () => {
  const [cartCounter] = useContext(CartContext);

  return (
    <nav className="nav">
      <div className="container nav__container">
          <a
            className="nav__logoLink"
            href="https://www.saatvamattress.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="nav__logo"
              src="/assets/images/logo.svg"
              alt="saatva logo"
            />
          </a>
          <div className="nav__cart-logo">
            <img src="/assets/images/cart.svg" alt="cart icon" />
            {cartCounter > 0 && <span data-testid="counter">{cartCounter}</span>}
          </div>
        </div>
    </nav>  
  )
}

export default Nav