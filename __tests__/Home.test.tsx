import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page'; // Import the homepage component

test('Homepage renders "Workhive"', () => {
  render(<Home />); // Render the homepage component
  const headingElement = screen.getByText('Workhive');
  expect(headingElement).toBeInTheDocument();
});
