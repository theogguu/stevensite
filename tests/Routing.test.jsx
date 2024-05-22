import { render, screen } from "@testing-library/react";
import HomePage from "../src/components/HomePage/HomePage";
import NotFoundPage from "../src/components/NotFoundPage/NotFoundPage";
import { expect } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("react-router-dom tests", () => {

    it ("should render the HomePage component when the route is '/'", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </MemoryRouter>
        );
        expect(screen.getByText("Steven Gu")).toBeInTheDocument();
    });

    it ("should render the NotFoundPage component when the route does not exist", () => {
        render(
            <MemoryRouter initialEntries={["/asdFASGHSKJAfsdfsdf"]}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </MemoryRouter>
        );
        expect(screen.getByText("The page you're looking for does not exist.")).toBeInTheDocument();
    });

    it ()

});