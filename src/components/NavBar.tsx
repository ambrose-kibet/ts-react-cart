import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
const Navbar = () => {
  const { total } = useCartContext();
  return (
    <nav>
      <Link to="/">
        <h3>Products</h3>
      </Link>
      <Link to="/cart" className="cart">
        <FaShoppingCart className="cart-icon" />
        <span className="pill">{total}</span>
      </Link>
    </nav>
  );
};
export default Navbar;
