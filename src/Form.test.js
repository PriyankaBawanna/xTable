import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Model from "./Model";


describe("Model Application Tests", () => {
  test("Opens the Model", () => {
    render(<Model />);
    const openButton = screen.getByText(/open Model/i);
    fireEvent.click(openButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  test("Validates email input field", () => {
    render(<Model />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.blur(emailInput);
    expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
  });

  test("Validates phone number input field", () => {
    render(<Model />);
    const phoneInput = screen.getByLabelText(/phone/i);
    fireEvent.change(phoneInput, { target: { value: "123" } });
    fireEvent.blur(phoneInput);
    expect(screen.getByText(/invalid phone number/i)).toBeInTheDocument();
  });

  test("Validates date of birth input field", () => {
    render(<Model />);
    const dobInput = screen.getByLabelText(/date of birth/i);
    fireEvent.change(dobInput, { target: { value: "2025-01-01" } });
    fireEvent.blur(dobInput);
    expect(screen.getByText(/invalid date of birth/i)).toBeInTheDocument();
  });

  test("Submits the form with valid data", () => {
    render(<Model />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: "1234567890" } });
    fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: "2000-01-01" } });

    fireEvent.click(screen.getByText(/submit/i));

    expect(screen.getByText(/form submitted successfully/i)).toBeInTheDocument();
  });

  test("Closes the Model when clicking outside", () => {
    render(<Model />);
    fireEvent.click(screen.getByText(/open Model/i));
    fireEvent.click(document.body); // Simulating outside click
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
