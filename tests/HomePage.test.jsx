import { render, screen } from '@testing-library/react';

import HomePage from '../src/components/HomePage/HomePage';
import { expect } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations)

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
    });

    it('has no accessibility violations', async () => {
      const { container } = render(<HomePage />);
      expect(await axe(container)).toHaveNoViolations();
    });
  });