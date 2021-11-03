import './Meta.scss';
import { formatPrice } from '../../../../utils';
import useCart from '../../../../hooks/useCart';

const Meta = ({
  mattresses,
  currentMattressIndex,
  setCurrentMattressIndex,
}) => {
  const { items, setItems } = useCart();
  const currentMattress = mattresses[currentMattressIndex];

  return (
    <div className='meta'>
      <h1>Choose Your Mattress</h1>
      <div className='select-type'>
        <strong className='label'>Select Mattress Type</strong>
        <div className='type-selector'>
          {mattresses.map(({ name }, index) => {
            return (
              <div
                key={name}
                className={`type-option ${
                  index === currentMattressIndex ? 'active' : ''
                }`}
                onClick={() => setCurrentMattressIndex(index)}
              >
                {name}
              </div>
            );
          })}
        </div>
        <div className='name-rating-price'>
          <div className='name-rating'>
            <h2 className='name'>{currentMattress.name}</h2>
            <span className='rating'>
              Rating: {currentMattress.reviewRating.toString()}/5
            </span>
          </div>
          <span className='price'>{formatPrice(currentMattress.price)}</span>
        </div>
      </div>
      <button
        type='button'
        className='add'
        onClick={() => setItems([...items, currentMattress])}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Meta;
