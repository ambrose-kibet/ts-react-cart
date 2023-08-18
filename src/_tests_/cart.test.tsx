import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import CartProvider from '../context/CartContext';
import CartPage from '../pages/CartPage';

describe('cart page test', () => {
  it('should render correctly', () => {
    const { container } = render(
      <CartProvider>
        <CartPage />
      </CartProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
