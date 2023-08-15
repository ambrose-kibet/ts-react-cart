import { useCartContext } from '../context/CartContext';
import SingleItem from './SingleItem';
const CartContainer = () => {
  const { cartItems, amount, clearCart } = useCartContext();
  if (cartItems.length < 1) {
    return <h2 style={{ textAlign: 'center' }}>Your Cart is Empty</h2>;
  }
  return (
    <section>
      <h2 style={{ textAlign: 'center' }}> Your cart</h2>
      {cartItems.map((item) => (
        <SingleItem key={item.id} {...item} />
      ))}
      <hr />
      <h5 className="total">
        Total: <span>${amount.toFixed(2)}</span>
      </h5>
      <div className="clear-container">
        <button className=" clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </section>
  );
};
export default CartContainer;
