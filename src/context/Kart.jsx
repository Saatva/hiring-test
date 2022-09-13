import React, { useState, createContext, useContext, useCallback } from 'react';

export const KartContext = createContext();

const KartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  // TODO: create deleteItem function
  const addItem = useCallback(
    (newItem) => {
      setItemCount((itemCount) => itemCount + 1);
      setItems((items) => {
        const index = items.findIndex(({ id }) => newItem === id);
        if (index === -1) {
          return [...items, { id: newItem, quantity: 1 }];
        } else {
          items[index] = { id: newItem, quantity: items[index].quantity + 1 };
          return items;
        }
      });
    },
    [setItems, setItemCount]
  );

  const value = { items, itemCount, addItem };

  return <KartContext.Provider value={value}>{children}</KartContext.Provider>;
};

const useKart = () => {
  const context = useContext(KartContext);
  if (context === undefined) {
    throw new Error('useKart must be used within a KartProvider');
  }
  return context;
};

export { KartProvider, useKart };
