import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tanghulu Varieties heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Tanghulu Varieties/i);
  expect(headingElement).toBeInTheDocument();
});
