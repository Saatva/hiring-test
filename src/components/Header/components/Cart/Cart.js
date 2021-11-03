import './Cart.scss';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCart from '../../../../hooks/useCart';
import ClickOutsideWrapper from '../ClickOutsideWrapper';
import CartPopover from '../CartPopover';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const toggleHandler = () => setIsOpen(!isOpen);
  const closeHandler = () => setIsOpen(false);

  return (
    <div className='cart'>
      <button className='cart-button' type='button' onClick={toggleHandler}>
        <AiOutlineShoppingCart size={36} />
      </button>
      <CountBadge count={items.length} />
      {isOpen && (
        <ClickOutsideWrapper onClickOutside={closeHandler}>
          <CartPopover onClose={closeHandler} />
        </ClickOutsideWrapper>
      )}
    </div>
  );
};

const CountBadge = ({ count }) => {
  return (
    <div className='count-badge'>
      <div className='count-container'>
        <span className='count' data-testid='count'>
          {count}
        </span>
      </div>
    </div>
  );
};

export default Cart;
