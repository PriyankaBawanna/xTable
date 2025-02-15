import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Modal Application Tests", () => {
  test("Opens the modal", () => {
    render( <Form closeModal={() => {}} />);
    const heading = screen.getByText(/Fill Details/i);
    expect(heading).toBeInTheDocument();
  });

  test("Validates email input field", async () => {
    render(<Form closeModal={() => {}} />);
    const emailInput = screen.getByLabelText(/Email Address:/i);
    expect(emailInput).toBeInTheDocument();

    await userEvent.type(emailInput, "invalid-email");
    fireEvent.blur(emailInput);

    expect(emailInput.checkValidity()).toBe(false);
  });

  test("Validates phone number input field", async () => {
    render(<Form closeModal={() => {}} />);
    const phoneInput = screen.getByLabelText(/Phone Number:/i);
    expect(phoneInput).toBeInTheDocument();

    await userEvent.type(phoneInput, "12345");
    fireEvent.blur(phoneInput);

    expect(phoneInput.checkValidity()).toBe(false); // Should fail as it's not 10 digits
  });

  test("Validates date of birth input field", async () => {
    render(<Form closeModal={() => {}} />);
    const dobInput = screen.getByLabelText(/Date of Birth:/i);
    expect(dobInput).toBeInTheDocument();

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1); // Set future date
    await userEvent.type(dobInput, futureDate.toISOString().split("T")[0]);

    fireEvent.blur(dobInput);
    expect(dobInput.checkValidity()).toBe(false); // Future DOB should be invalid
  });

  test("Submits the form with valid data", async () => {
    const mockClose = jest.fn();
    render(<Form closeModal={mockClose} />);

    await userEvent.type(screen.getByLabelText(/Username:/i), "JohnDoe");
    await userEvent.type(screen.getByLabelText(/Email Address:/i), "johndoe@example.com");
    await userEvent.type(screen.getByLabelText(/Phone Number:/i), "9876543210");
    await userEvent.type(screen.getByLabelText(/Date of Birth:/i), "2000-01-01");

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    expect(mockClose).toHaveBeenCalled(); // Ensures modal closes on successful submit
  });

  test("Closes the modal when clicking outside", () => {
    const mockClose = jest.fn();
    render(<Form closeModal={mockClose} />);

    fireEvent.click(document.body);
    expect(mockClose).toHaveBeenCalled();
  });
});
