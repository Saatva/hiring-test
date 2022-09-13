import React from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";

import theme, { GlobalStyle } from "./theme";
import { KartProvider } from "./context/Kart";
import { Navbar } from "./components";
import { Homepage } from "./pages";

const queryClient = new QueryClient();

const AppContainer = styled.div`
  background-color: #f6f5f3;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <KartProvider>
          <AppContainer>
            <Navbar />
            <Homepage />
          </AppContainer>
        </KartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
