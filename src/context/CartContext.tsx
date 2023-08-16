import {
  createContext,
  ReactElement,
  useReducer,
  useContext,
  useEffect,
} from 'react';
import { productType } from './productsContext';
import { CART_REDUCER_ACTIONS } from '../actions';
import reducer from '../reducers/cartReducer';

export type cart = {
  cartItems: productType[];
  total: number;
  amount: number;
};

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};
export type payloadType = {
  id: number;
  product?: productType;
  type?: string;
};

export type ActionType = {
  type: string;
  payload?: payloadType;
};
type contextActions = {
  addToCart: ({ id, product }: payloadType) => void;
  removeFromCart: ({ id }: payloadType) => void;
  clearCart: () => void;
  toggleAmount: ({ id, type }: payloadType) => void;
};
const initialState: cart = {
  cartItems: [],
  total: 0,
  amount: 0,
};

const CartContext = createContext<cart & contextActions>({
  ...initialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addToCart: (payload: payloadType) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeFromCart: ({ id }: payloadType) => {},
  clearCart: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toggleAmount: (payload: payloadType) => {},
});

const CartProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = ({ id, product }: payloadType): void => {
    dispatch({
      type: CART_REDUCER_ACTIONS.ADD_TO_CART,
      payload: { id, product },
    });
  };
  const removeFromCart = ({ id }: payloadType) => {
    dispatch({ type: CART_REDUCER_ACTIONS.REMOVE_FROM_CART, payload: { id } });
  };
  const clearCart = () => {
    dispatch({ type: CART_REDUCER_ACTIONS.CLEAR_CART });
  };
  const toggleAmount = ({ id, type }: payloadType) => {
    dispatch({
      type: CART_REDUCER_ACTIONS.TOGGLE_AMOUNT,
      payload: { id, type },
    });
  };
  const getTotals = () => {
    dispatch({ type: CART_REDUCER_ACTIONS.GET_TOTALS });
  };
  useEffect(() => {
    getTotals();
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, clearCart, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
export const useCartContext = (): cart & contextActions =>
  useContext(CartContext);
