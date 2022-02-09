import React from "react";
import { TMattress } from "./mattress";
import { TShoppingCartItem } from "./shoppingCart";

export type TContextState = {
    mattresses: {
        classic: TMattress;
        loom: TMattress;
        zen: TMattress;
    };
    selected: string;
    shoppingCart: TShoppingCartItem[];
};

export type TAction = {
    type: string;
    payload?: any;
};

export type TAppProviderProps = {
    state: TContextState;
    dispatch: React.Dispatch<TAction>;
};

export type TContextProviderProps = {
    children: React.ReactNode;
};
