import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "./Table";

const sampleData = [
    { date: "2024-02-10", views: 20, article: "Article 1" },
    { date: "2024-01-15", views: 50, article: "Article 2" },
    { date: "2024-03-05", views: 30, article: "Article 3" },
];

test("renders the table with initial data", () => {
    render(<Table data={sampleData} />);
    expect(screen.getByText("Sort by Date")).toBeInTheDocument();
    expect(screen.getByText("2024-02-10")).toBeInTheDocument();
    expect(screen.getByText("2024-01-15")).toBeInTheDocument();
});

test("sorts the table by date when sort button is clicked", () => {
    render(<Table data={sampleData} />);
    const button = screen.getByTestId("sort-date-btn");
    fireEvent.click(button);

    const rows = screen.getAllByRole("row");
    expect(rows[1]).toHaveTextContent("2024-01-15");
    expect(rows[2]).toHaveTextContent("2024-02-10");
    expect(rows[3]).toHaveTextContent("2024-03-05");
});
