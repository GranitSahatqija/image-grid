import { render, screen } from '@testing-library/react';
import AppHeader from './AppHeader';

test('renders app header', () => {
  render(<AppHeader />);
  const title = screen.getByText(/GALLERY GRID/i);
  expect(title).toBeInTheDocument();
});
