import { render, screen } from '@testing-library/react';
import App from './App';

test('add to cart', () => {
  render(<App />);

  const addToCartButton = screen.getByText(/add to cart/i);
  const count = screen.getByTestId('count');

  expect(addToCartButton).toBeInTheDocument();
  expect(count).toBeInTheDocument();
  expect(count).toHaveTextContent('0');

  addToCartButton.click();
  expect(count).toHaveTextContent('1');

  addToCartButton.click();
  addToCartButton.click();
  addToCartButton.click();
  expect(count).toHaveTextContent('4');
});
