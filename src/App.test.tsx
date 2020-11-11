import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders still coding text', () => {
  render(<App />);
  const linkElement = screen.getByText(/still busy coding this one/i);
  expect(linkElement).toBeInTheDocument();
});
