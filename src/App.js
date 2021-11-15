import "./App.css";
import Logo from "./Logo";
import Cart from "./Cart";
import MattressSelector from "./MattressSelector";
import mattresses from "./mattresses.json";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(
    localStorage.getItem("cartCount") || 0
  );
  return (
    <div className="app">
      <header className="header">
        <Logo />
        <Cart count={cartCount} />
      </header>
      <MattressSelector
        mattresses={mattresses}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
    </div>
  );
}

export default App;
