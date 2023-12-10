import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Wokhive from '../components/Wokhive'; // Import the homepage component

test('Homepage renders "Workhive"', () => {
  render(<Wokhive />); // Render the homepage component
  const headingElement = screen.getByText('Workhive');
  expect(headingElement).toBeInTheDocument();
});
