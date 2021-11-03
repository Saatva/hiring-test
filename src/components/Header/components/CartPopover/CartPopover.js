import './CartPopover.scss';
import { useEffect, useState } from 'react';
import useCart from '../../../../hooks/useCart';
import { formatPrice } from '../../../../utils';
import { AiOutlineClose } from 'react-icons/ai';

/*
  Wrote this as my added personal flair, if I had more time I'd've written a better way to handle cart state.
*/

const CartPopover = ({ onClose }) => {
  const { items } = useCart();
  const cartTotal = items.reduce((acc, it) => acc + it.price, 0);
  const itemsByKey = items.reduce((acc, item) => {
    const { key } = item;

    if (acc[key]) {
      const keyItems = acc[key];

      return {
        ...acc,
        [key]: [...keyItems, item],
      };
    }

    return {
      ...acc,
      [key]: [item],
    };
  }, {});

  return (
    <div className='cart-popover'>
      <div className='inner'>
        <AiOutlineClose onClick={onClose} className='close' />
        <ul className='cart-item-list'>
          {Object.entries(itemsByKey).map(([itemKey, keyItems]) => {
            return <CartItem itemKey={itemKey} keyItems={keyItems} />;
          })}
        </ul>
        <div className='total'>
          <strong>Cart total:</strong>
          <span>{formatPrice(cartTotal)}</span>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ itemKey, keyItems }) => {
  const { items, setItems } = useCart();
  const [count, setCount] = useState(keyItems.length);
  const item = items.find(({ key }) => key === itemKey);

  useEffect(() => {
    setCount(keyItems.length);
  }, [keyItems.length]);

  return (
    <li className='cart-item'>
      <strong>{itemKey}</strong>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (count === 0) {
            return setItems(items.filter((it) => it.key !== itemKey));
          }

          const currentCount = items.filter((it) => it.key === itemKey).length;

          if (currentCount < count) {
            const numToAdd = count - currentCount;
            const itemsToAdd = Array.from(new Array(numToAdd).keys()).map(
              (i) => ({ ...item }),
            );

            return setItems(items.concat(itemsToAdd));
          }

          if (currentCount > count) {
            const numToRemove = currentCount - count;
            const removed = Array.from(new Array(numToRemove).keys()).reduce(
              (acc, _) => {
                const itemIndex = acc.findIndex((it) => it.key === itemKey);

                return acc
                  .slice(0, itemIndex)
                  .concat(acc.slice(itemIndex + 1, acc.length));
              },
              [...items],
            );

            setItems(removed);
          }
        }}
      >
        <input
          id={itemKey}
          type='number'
          value={count}
          min={0}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' disabled={count === keyItems.length}>
          Update
        </button>
      </form>
    </li>
  );
};

export default CartPopover;
