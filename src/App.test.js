import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Add to Cart Button exists", () => {
  render(<App />);
  const atcButton = screen.getByText(/Add to Cart/i);
  expect(atcButton).toBeInTheDocument();
});

test("Add to Cart Button starts at zero", () => {
  render(<App />);
  const counter = screen.getByTestId("cart-counter");
  expect(counter.textContent).toBe("0");
});

test("Add to Cart Button increments on click", () => {
  render(<App />);
  const button = screen.getByTestId("atc-button");
  fireEvent(
    button,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  const counter = screen.getByTestId("cart-counter");
  expect(counter.textContent).toBe("1");
});
