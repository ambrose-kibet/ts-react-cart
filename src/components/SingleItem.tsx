import { useCartContext } from '../context/CartContext';
import { productType } from '../context/productsContext';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

const SingleItem = ({ id, title, price, amount, img }: productType) => {
  const { removeFromCart, toggleAmount } = useCartContext();
  return (
    <article>
      <div className="container">
        <div className="img-container">
          <img src={img} alt="title" width={'100'} />
        </div>
        <div className="info-container">
          <h5>{title}</h5>
          <h5>${price}</h5>
          <button className="remove-btn" onClick={() => removeFromCart({ id })}>
            remove
          </button>
        </div>
      </div>
      <div className="amount-container">
        <button
          className="toggle-btn"
          onClick={() => toggleAmount({ id, type: 'inc' })}
        >
          <BiUpArrow />
        </button>
        <p style={{ marginBottom: '0' }}>{amount}</p>
        <button
          className="toggle-btn"
          onClick={() => toggleAmount({ id, type: 'dec' })}
        >
          <BiDownArrow />
        </button>
      </div>
    </article>
  );
};
export default SingleItem;
