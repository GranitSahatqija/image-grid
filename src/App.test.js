import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simple gallery grid developed in React/i);
  expect(linkElement).toBeInTheDocument();
});
