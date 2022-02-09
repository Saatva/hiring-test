import React, { createContext, useContext, useReducer } from "react";
import mattressesData from "assets/mattresses.json";
import {
    TAppProviderProps,
    TContextProviderProps,
    TContextState,
} from "types/context";
import { reducer } from "./reducer";

const initialState: TContextState = {
    mattresses: mattressesData.mattresses,
    selected: "classic",
    shoppingCart: [],
};

export const AppContext = createContext({} as TAppProviderProps);

export const AppContextProvider = ({
    children,
}: TContextProviderProps): React.ReactElement => {
    const [state, dispatch] = useReducer(reducer, { ...initialState });

    return (
        <AppContext.Provider children={children} value={{ state, dispatch }} />
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error("useAppContext must be used within AppContextProvider");
    }

    return context || initialState;
};
