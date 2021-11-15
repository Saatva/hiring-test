import CartIcon from "./CartIcon";

export default function Cart({ count }) {
  return (
    <div className="wrapper--cart">
      <CartIcon />
      <span className="cart-counter" data-testid="cart-counter">
        {count}
      </span>
    </div>
  );
}
