import './App.scss';
import data from './mattresses.json';
import { CartProvider } from './hooks/useCart';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <CartProvider>
      <div className='App'>
        <Header />
        <Main data={data} />
      </div>
    </CartProvider>
  );
}

export default App;
