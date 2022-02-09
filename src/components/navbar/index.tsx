import React, { useEffect, useState } from "react";
import logo from "assets/images/logo.png";
import { ReactComponent as CartIcon } from "assets/images/shopping-cart-line.svg";
import { useAppContext } from "context";
import classNames from "classnames";
import "./styles.scss";
import ShoopingCartDropdown from "components/shopping-cart-dropdown";

const Navbar = (): React.ReactElement => {
    const {
        state: { shoppingCart },
    } = useAppContext();
    const [showAnimation, setShowAnimation] = useState(false);
    const [showShoppingCart, setShowShoppingCart] = useState(false);

    const toggleShoppingCart = () => setShowShoppingCart((prev) => !prev);

    useEffect(() => {
        if (shoppingCart.length) {
            setShowAnimation(true);
        }

        return () => {
            setShowAnimation(false);
        };
    }, [shoppingCart]);

    useEffect(() => {
        if (showAnimation) {
            setTimeout(() => {
                setShowAnimation(false);
            }, 1200);
        }
    }, [showAnimation]);

    return (
        <header className="ms-header">
            <div className="ms-container ms-header__container">
                <img className="ms-header__logo" src={logo} alt="saavta" />

                <button
                    className="ms-header__button"
                    onClick={toggleShoppingCart}
                >
                    <CartIcon />
                    <span
                        className={classNames("ms-header__button__badge", {
                            "ms-header__button__badge--active": showAnimation,
                        })}
                    >
                        {shoppingCart.length || 0}
                    </span>
                </button>
                <ShoopingCartDropdown
                    show={showShoppingCart}
                    onClose={toggleShoppingCart}
                />
            </div>
        </header>
    );
};

export default Navbar;
