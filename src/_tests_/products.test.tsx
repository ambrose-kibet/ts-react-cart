import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ProductsContext } from '../context/productsContext';
import ProductsPage from '../pages/ProductsPage';

describe('Render products page', () => {
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

  it('should render correctly', () => {
    const { container } = render(
      <ProductsContext.Provider
        value={{ products: productList, isLoading: false }}
      >
        <MemoryRouter>
          <ProductsPage />
        </MemoryRouter>
      </ProductsContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
  it('should have all products on the screen', () => {
    render(
      <ProductsContext.Provider
        value={{ products: productList, isLoading: false }}
      >
        <MemoryRouter>
          <ProductsPage />
        </MemoryRouter>
      </ProductsContext.Provider>
    );
    const getByTextWithSpace = (text: string) => {
      return screen.getByText((content) => {
        return content.trim().includes(text.trim());
      });
    };
    productList.forEach((product) => {
      expect(getByTextWithSpace(product.title)).toBeInTheDocument();
      expect(getByTextWithSpace(`${product.price}`)).toBeInTheDocument();
    });
  });
  it('should render product images correctly', () => {
    render(
      <ProductsContext.Provider
        value={{ products: productList, isLoading: false }}
      >
        <MemoryRouter>
          <ProductsPage />
        </MemoryRouter>
      </ProductsContext.Provider>
    );
    const productImageElements: HTMLImageElement[] =
      screen.getAllByTestId('product-image');
    expect(productImageElements).toHaveLength(productList.length);

    productImageElements.forEach((element) => {
      expect(element.src).toMatch(/\.png/);
    });
  });
});
