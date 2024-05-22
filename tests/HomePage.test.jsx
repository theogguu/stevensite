import { render, screen } from '@testing-library/react';

import HomePage from '../src/components/HomePage/HomePage';
import { expect } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations)

describe('HomePage component', () => {
    it('renders necessary elements with proper content and attributes', () => {
      render(<HomePage />);
  

      expect(screen.getByText("Hi, I'm")).toBeInTheDocument();

      // Multiple 'Steven Gu's are rendered, so we use getAllByText
      expect(screen.getAllByText('Steven Gu')).toBeTruthy();

      // Check if profile image is rendered with alt attribute
      expect(screen.getAllByAltText('Steven Gu')).toBeTruthy();
    });

    it('has no accessibility violations', async () => {
      const { container } = render(<HomePage />);
      expect(await axe(container)).toHaveNoViolations();
    });
  });