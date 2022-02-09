import { TAction, TContextState } from "types/context";
import { TMattress } from "types/mattress";
import { TShoppingCartItem } from "types/shoppingCart";
import { AppActions } from "./actions";

const addOrUpdateCartItem = (
    shoppingCart: TShoppingCartItem[],
    mattress: TMattress
) => {
    const itemExists =
        shoppingCart.findIndex(
            (item) => item.mattress.name === mattress.name
        ) !== -1;

    if (itemExists) {
        return shoppingCart.map((item) => {
            if (item.mattress.name === mattress.name) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
    }
    return [...shoppingCart, { mattress: mattress, quantity: 1 }];
};

const subtractQuantity = (
    shoppingCart: TShoppingCartItem[],
    mattress: TMattress
) => {
    return shoppingCart.map((item) => {
        if (item.mattress.name === mattress.name && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
    });
};

export const reducer = (
    state: TContextState,
    action: TAction
): TContextState => {
    switch (action.type) {
        case AppActions.SET_SELECTED_MATTRESS:
            return { ...state, selected: action.payload };

        case AppActions.ADD_TO_SHOPPING_CART:
            return {
                ...state,
                shoppingCart: addOrUpdateCartItem(
                    state.shoppingCart,
                    action.payload
                ),
            };

        case AppActions.REMOVE_FROM_SHOPPING_CART:
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter(
                    (item) => item.mattress.name !== action.payload?.name
                ),
            };

        case AppActions.SUBTRACT_SHOPPING_CART_ITEM:
            return {
                ...state,
                shoppingCart: subtractQuantity(
                    state.shoppingCart,
                    action.payload
                ),
            };

        default:
            return { ...state };
    }
};
