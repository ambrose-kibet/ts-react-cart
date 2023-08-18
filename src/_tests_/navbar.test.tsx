import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/NavBar';
import CartProvider from '../context/CartContext';

describe('Navv=bar tests', () => {
  it('should render correctly', () => {
    const { container } = render(
      <CartProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </CartProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should shave a total of 0 items initially', () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </CartProvider>
    );
    expect(screen.getByTestId('cart-count').textContent).toEqual('0');
  });
});
