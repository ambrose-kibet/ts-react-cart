import SingleProduct from '../components/SingleProduct';
import { useProductsContext } from '../context/productsContext';

const ProductsPage = () => {
  const { products, isLoading } = useProductsContext();
  console.log(products);
  if (isLoading) {
    return <h1 style={{ textAlign: 'center' }}> Loading...</h1>;
  }
  return (
    <section className="products-section">
      {products.map((product) => (
        <SingleProduct product={product} key={product.id} />
      ))}
    </section>
  );
};
export default ProductsPage;
