import { render, screen } from '@testing-library/react';

import NotFoundPage from '../src/components/NotFoundPage/NotFoundPage';
import { expect } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations)

describe('NotFoundPage component', () => {
    it('renders necessary elements with proper content and attributes', () => {
      render(<NotFoundPage />);
  
      // Check if "404" is rendered
      expect(screen.getByText("404")).toBeInTheDocument();
  
    });

    it('has no accessibility violations', async () => {
      const { container } = render(<NotFoundPage />);
      expect(await axe(container)).toHaveNoViolations();
    });
  });