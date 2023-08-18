import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ProductsContext } from '../context/productsContext';
import CartProvider from '../context/CartContext';
import ProductsPage from '../pages/ProductsPage';
import { screen, render, fireEvent } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import CartPage from '../pages/CartPage';

describe('Add products to cart', () => {
  const productList = [
    {
      id: 2,
      title: 'google pixel ',
      price: 499.99,
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png',
      amount: 1,
    },
    {
      id: 3,
      title: 'Xiaomi Redmi Note 2',
      price: 699.99,
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png',
      amount: 1,
    },
  ];

  it('should have two items on the products page', () => {
    render(
      <CartProvider>
        <ProductsContext.Provider
          value={{ products: productList, isLoading: false }}
        >
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </MemoryRouter>
        </ProductsContext.Provider>
      </CartProvider>
    );
    expect(screen.getAllByRole('link').length).toBe(productList.length);
  });

  it('should navigate to cart page when a Add to cart is clicked', async () => {
    render(
      <CartProvider>
        <ProductsContext.Provider
          value={{ products: productList, isLoading: false }}
        >
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </MemoryRouter>
        </ProductsContext.Provider>
      </CartProvider>
    );

    fireEvent.click(screen.getAllByRole('link')[0]);
    const getByTextWithSpace = (text: string) => {
      return screen.getByText((content) => {
        return content.trim().includes(text.trim());
      });
    };
    expect(getByTextWithSpace(`Total:`)).toBeInTheDocument();
  });
});
