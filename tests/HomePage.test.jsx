import { render, screen } from '@testing-library/react';

import HomePage from '../src/components/HomePage/HomePage';
import { expect } from 'vitest';

describe('HomePage component', () => {
    it('renders necessary elements with proper content and attributes', () => {
      render(<HomePage />);
  
      // Check if "Hi, I'm" text is rendered
      expect(screen.getByText("Hi, I'm")).toBeInTheDocument();
  
      // Check if the name "Steven Gu" is rendered
      expect(screen.getAllByText('Steven Gu')).toBeTruthy();
  
      // Check if profile image is rendered with alt attribute
      expect(screen.getAllByAltText('Steven Gu')).toBeTruthy();
      // expect(screen.getByRole('link', { name: /Link to Steven's GitHub page/i }).toBeInTheDocument());
      

      // Check if there are any inaccessible elements
      const inaccessibleLinks = screen.queryAllByRole('link', { inaccessible: true });

    // Log the details of each inaccessible link
      inaccessibleLinks.forEach(link => {
        console.log('Inaccessible link:', link.textContent);
        console.log('Attributes:', link.attributes);
        console.log('Computed styles:', window.getComputedStyle(link));
        console.log('Other relevant information...');
      });
      });
  });