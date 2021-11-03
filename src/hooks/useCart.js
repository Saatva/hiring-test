import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const useCartContext = () => {
  const [items, setItems] = useState([]);

  return { items, setItems };
};

export const CartProvider = ({ children }) => {
  const cartContextValue = useCartContext();

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider component.');
  }

  return context;
};

export default useCart;
