import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders cart counter', () => {
  render(<App />);
  const cartCounter = screen.getByRole('cart-counter');
  expect(cartCounter).toHaveTextContent('0');
});

test('renders add to cart button', ()=>{
  render(<App />);
  const addToCart = screen.getByRole('add-to-cart');
  expect(addToCart).toBeInTheDocument();
})

test('add to cart working', ()=>{
  render(<App />);
  const cartCounter = screen.getByRole('cart-counter');
  const addToCart = screen.getByRole('add-to-cart');
  fireEvent.click(addToCart);
  expect(cartCounter).toHaveTextContent('1');
})