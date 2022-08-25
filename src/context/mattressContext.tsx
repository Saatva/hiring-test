import React, { createContext, useState, useMemo, SetStateAction, Dispatch } from "react";
import { Mattresses } from "../types";

type MattressContextProviderProps = {
    children: React.ReactNode;
}

type MattressesContextType = {
    mattresses: Mattresses[];
    setMattresses: Dispatch<SetStateAction<Mattresses[]>>
}

export const MattressContext = createContext<MattressesContextType>({} as MattressesContextType);

export const MattressContextProvider = ({ children }: MattressContextProviderProps) => {
    const [mattresses, setMattresses] = useState<Mattresses[]>([]);

    const MattressesMemo = useMemo(
        () => ({mattresses, setMattresses}),
        [mattresses, setMattresses]
    )
    return (
        <MattressContext.Provider value={MattressesMemo}>
            {children}
        </MattressContext.Provider>
    );
}