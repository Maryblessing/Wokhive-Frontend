// ComingSoon.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ComingSoon from '@/app/coming-soon/page';

describe('ComingSoon Page', () => {
  test('renders the page with correct content', () => {
    render(<ComingSoon />);

    // Check if the "Coming Soon..." heading is present
    const headingElement = screen.getByText(/Coming Soon.../i);
    expect(headingElement).toBeInTheDocument();

    // Check if the explanation text is present
    const explanationTextElement = screen.getByText(/We’re sorry for the inconvenience/i);
    expect(explanationTextElement).toBeInTheDocument();

    // Check if the "Go to homepage" button is present
    const goToHomepageButton = screen.getByRole('link', { name: /Go to homepage/i });
    expect(goToHomepageButton).toBeInTheDocument();
  });
});
