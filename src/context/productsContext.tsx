import {
  ReactElement,
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import axios from 'axios';
export type productType = {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
};
type contextType = {
  children?: ReactElement;
};
type useProductsContextType = {
  products: productType[];
  isLoading: boolean;
};
const url = 'https://course-api.com/react-useReducer-cart-project';
const ProductsContext = createContext({
  products: [],
  isLoading: false,
});
const ProductsProvider = ({ children }: contextType) => {
  const [products, setProducts] = useState({
    products: [],
    isLoading: false,
  });
  const fetchProducts = useCallback(async () => {
    try {
      setProducts({ ...products, isLoading: true });
      const { data } = await axios(url);
      setProducts({ products: data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;

export const useProductsContext = (): useProductsContextType => {
  return useContext(ProductsContext);
};
