import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartCounter, setCartCounter] = useState(0);

  return (
    <CartContext.Provider value={[cartCounter, setCartCounter]}>
      {children}
    </CartContext.Provider>
  );
}
