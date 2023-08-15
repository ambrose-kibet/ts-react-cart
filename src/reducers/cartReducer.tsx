import { CART_REDUCER_ACTIONS } from '../actions';
import { ActionType, cart } from '../context/CartContext';
const reducer = (state: cart, action: ActionType): cart => {
  if (action.type === CART_REDUCER_ACTIONS.ADD_TO_CART) {
    if (!action.payload || !action.payload.id || !action.payload.product) {
      throw new Error('provide a product and id to add to cart');
    }
    const exists = state.cartItems.find(
      (item) => item.id == action.payload?.id
    );
    let newItems = state.cartItems;
    if (exists) {
      newItems = newItems.map((item) => {
        if (item.id == exists.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    } else {
      newItems = [...newItems, action.payload.product];
    }

    return {
      ...state,
      cartItems: newItems,
    };
  } else if (action.type === CART_REDUCER_ACTIONS.REMOVE_FROM_CART) {
    if (!action.payload || !action.payload.id) {
      throw new Error('provide a product id');
    }
    const { id } = action.payload;
    const newItems = state.cartItems.filter((item) => item.id !== id);
    return { ...state, cartItems: newItems };
  } else if (action.type === CART_REDUCER_ACTIONS.GET_TOTALS) {
    const { total, amount } = state.cartItems.reduce(
      (a, b) => {
        const subtotal = b.amount * b.price;
        a.total += b.amount;
        a.amount += subtotal;
        return a;
      },
      { total: 0, amount: 0 }
    );
    const totalamount = Number(amount.toFixed(2));
    return { ...state, total, amount: totalamount };
  } else if (action.type === CART_REDUCER_ACTIONS.TOGGLE_AMOUNT) {
    if (!action.payload || !action.payload.id || !action.payload?.type) {
      throw new Error('provide a product id and type');
    }
    let tempItems = state.cartItems;
    const { id, type } = action.payload;
    tempItems = tempItems.map((item) => {
      if (item.id === id) {
        if (type === 'dec') {
          return { ...item, amount: item.amount - 1 };
        }
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    tempItems = tempItems.filter((item) => item.amount >= 1);
    return { ...state, cartItems: tempItems };
  } else if (action.type === CART_REDUCER_ACTIONS.CLEAR_CART) {
    return { ...state, cartItems: [] };
  }
  throw new Error(`No matching action " ${action.type}" action type`);
};

export default reducer;
