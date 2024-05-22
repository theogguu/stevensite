import { render, screen } from "@testing-library/react";
import NotFoundPage from "../src/components/NotFoundPage/NotFoundPage";
import { expect } from "vitest";
import { axe, toHaveNoViolations } from "jest-axe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

expect.extend(toHaveNoViolations);

describe("NotFoundPage component", () => {
  it("renders the 'Return to homepage' link", () => {
    render(<NotFoundPage />);
    expect(screen.getByText("Return to homepage", { selector: "a" })).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<NotFoundPage />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
