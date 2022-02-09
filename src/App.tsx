import Navbar from "components/navbar";
import { AppContextProvider } from "context";
import MattressPage from "pages/mattress";
import React from "react";

function App(): React.ReactElement {
    return (
        <AppContextProvider>
            <main>
                <Navbar />
                <MattressPage />
            </main>
        </AppContextProvider>
    );
}

export default App;
