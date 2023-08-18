import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import { describe, it, expect } from 'vitest';

describe('error page', () => {
  it('renders Errorpage correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it('should  have back home link', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    const backbtn: HTMLAnchorElement = screen.getByRole('link');
    expect(backbtn.href).toContain('/');
  });
});
