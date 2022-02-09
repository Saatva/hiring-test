import React, { useRef } from "react";
import { useAppContext } from "context";
import { ReactComponent as DeleteIcon } from "assets/images/delete-bin-7-line.svg";
import "./styles.scss";
import classNames from "classnames";
import { AppActions } from "context/actions";
import { TMattress } from "types/mattress";
import { useOnClickOutside } from "hooks/useOnClickOutside";

const ShoopingCartDropdown = ({
    show,
    onClose,
}: ShoopingCartDropdownProps): React.ReactElement => {
    const {
        state: { shoppingCart },
        dispatch,
    } = useAppContext();
    const dropdownRef = useRef<HTMLUListElement>(null);

    useOnClickOutside(dropdownRef, () => {
        if (show && onClose) {
            setTimeout(onClose, 200);
        }
    });

    const increaseQuantity = (mattress: TMattress) => {
        dispatch({ type: AppActions.ADD_TO_SHOPPING_CART, payload: mattress });
    };

    const subtractQuantity = (mattrees: TMattress) => {
        dispatch({
            type: AppActions.SUBTRACT_SHOPPING_CART_ITEM,
            payload: mattrees,
        });
    };

    const removeItem = (mattress: TMattress) => {
        dispatch({
            type: AppActions.REMOVE_FROM_SHOPPING_CART,
            payload: mattress,
        });
    };

    return (
        <ul
            ref={dropdownRef}
            className={classNames("ms-shopping-cart-dropdown", {
                "ms-shopping-cart-dropdown--active": show,
            })}
        >
            {shoppingCart.map(({ quantity, mattress }) => (
                <li
                    key={`shopping-cart-item-${mattress.name}`}
                    className="ms-shopping-cart-dropdown__item"
                >
                    <img
                        className="ms-shopping-cart-dropdown__item__image"
                        src={`/images/${mattress.imageFileName}`}
                        alt={mattress.name}
                    />
                    <div className="ms-shopping-cart-dropdown__item__description">
                        <h4 className="ms-shopping-cart-dropdown__item__title">
                            {mattress.name}
                        </h4>
                        <div className="ms-shopping-cart-dropdown__item__price">
                            $
                            {Number(mattress.price * quantity).toLocaleString()}
                        </div>
                    </div>
                    <div className="ms-shopping-cart-dropdown__item__controls">
                        <button
                            onClick={() => removeItem(mattress)}
                            className="ms-shopping-cart-dropdown__item__delete-button"
                        >
                            <DeleteIcon />
                        </button>

                        <div className="ms-shopping-cart-dropdown__item__quantity-control">
                            <button
                                onClick={() => subtractQuantity(mattress)}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <span className="ms-shopping-cart-dropdown__item__quantity-label">
                                {quantity}
                            </span>
                            <button onClick={() => increaseQuantity(mattress)}>
                                +
                            </button>
                        </div>
                    </div>
                </li>
            ))}

            {!shoppingCart.length && (
                <h3 className="ms-shopping-cart-dropdown__empty">
                    Your Shopping Cart is empty
                </h3>
            )}
        </ul>
    );
};

type ShoopingCartDropdownProps = {
    show?: boolean;
    onClose?: () => void;
};

ShoopingCartDropdown.defualtProps = {
    show: false,
    onClose: undefined,
};

export default ShoopingCartDropdown;
