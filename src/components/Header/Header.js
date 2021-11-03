import './Header.scss';
import Logo from './components/Logo';
import Cart from './components/Cart';

const Header = () => {
  return (
    <header id='app-header'>
      <Logo />
      <div className='cart-container'>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
