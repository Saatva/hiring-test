import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function AddButon() {
  const [cartCounter, setCartCounter] = useContext(CartContext);
  const [buttonText, setButtonText] = useState("Add to Cart");

  const onAddButtonClick = () => {
    setCartCounter(cartCounter + 1);
    setButtonText("Item added to the cart!");
    setTimeout(() => {
      setButtonText("Add to Cart");
    }, 2000);
  };

  return (
    <button
      data-testid="button-add"
      className="button"
      onClick={onAddButtonClick}
    >
      {buttonText}
    </button>
  );
}
