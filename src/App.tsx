import Navbar from './components/Navbar/index';
import MattressSelector from './components/MattressSelector';
import { MattressContextProvider } from './context/mattressContext';
import { ChakraProvider } from '@chakra-ui/react';
import './styles/App.scss';

function App() {
  return (
    <MattressContextProvider>
      <ChakraProvider>
        <div className="App">
          <Navbar />
          <MattressSelector />
        </div>
      </ChakraProvider>
    </MattressContextProvider>
  );
}

export default App;
