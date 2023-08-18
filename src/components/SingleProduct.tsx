import { useCartContext } from '../context/CartContext';
import { productType } from '../context/productsContext';
import { Link } from 'react-router-dom';

type productPropType = {
  product: productType;
};
const SingleProduct = ({ product }: productPropType) => {
  const { addToCart } = useCartContext();
  return (
    <article className="card">
      <div className="card-header">
        <img
          src={product.img}
          alt={product.title}
          width={'100%'}
          data-testid="product-image"
        />
      </div>
      <div className="card-body">
        <h5>{product.title}</h5>
        <h5> ${product.price}</h5>
      </div>
      <div className="card-footer">
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart({ id: product.id, product })}
        >
          Add to cart
        </Link>
      </div>
    </article>
  );
};
export default SingleProduct;
