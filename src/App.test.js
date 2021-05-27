import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Encounter Builder" header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Encounter Builder/i);
  expect(linkElement).toBeInTheDocument();
});
