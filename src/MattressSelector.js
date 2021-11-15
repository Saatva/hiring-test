import { useState } from "react";
export default function MattressSelector({
  mattresses,
  cartCount,
  setCartCount,
}) {
  const [selectedMattress, setSelectedMattress] = useState({
    shortName: "loom",
    ...mattresses.mattresses.loom,
  });
  const options = Object.keys(mattresses.mattresses);

  const changeMattress = (event) => {
    // Handles both the span and button as targets
    const shortName = event.target.name
      ? event.target.name
      : event.target.parentElement.name;
    setSelectedMattress({
      shortName,
      ...mattresses.mattresses[shortName],
    });
  };

  const incrementCartCount = () => {
    const newCount = ++cartCount;
    setCartCount(newCount);
    localStorage.setItem("cartCount", newCount);
  };

  return (
    <main className="selector--mattress">
      <div className="image--wrapper mobile-12 desktop-6">
        <img
          src={`/images/${selectedMattress.imageFileName}`}
          alt={selectedMattress.name}
          className="image--image"
        />
      </div>
      <div className={`product--info mobile-12 desktop-6`}>
        <h1 className="product--title">Choose Your Mattress</h1>
        <h2 className="product--subtitle">Select Mattress Type</h2>
        <div className="button--wrapper">
          {options &&
            options.map((item) => (
              <button
                type="button"
                name={item}
                onClick={changeMattress}
                className={`product--button underline ${
                  item === selectedMattress.shortName ? "selected" : ""
                }`}
                key={item}
              >
                <span className="underline">
                  {mattresses.mattresses[item].name}
                </span>
              </button>
            ))}
        </div>
        <div className="product--description">
          <div className="product--name mobile-6">
            <strong>{selectedMattress.name} Mattress</strong>
          </div>
          <div className="product--price mobile-6">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(selectedMattress.price)}
          </div>
          <div className="product--rating mobile-6">
            Rating: {parseFloat(selectedMattress.reviewRating).toFixed(1)}{" "}
            <div
              className="product--reviews"
              style={{ "--rating": selectedMattress.reviewRating }}
            ></div>
          </div>
        </div>
        <button
          className="atc-button"
          data-testid="atc-button"
          onClick={incrementCartCount}
        >
          Add to Cart
        </button>
      </div>
    </main>
  );
}
