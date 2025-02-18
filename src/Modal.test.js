
import { render, screen, fireEvent } from "@testing-library/react";
import Model from "./Model";

describe("ModalComponent", () => {
  it("should open and close the modal when clicked outside", () => {
    render(<Model />);

  
    expect(screen.queryByText(/Modal Content/i)).toBeNull();
    fireEvent.click(screen.getByText(/Open Modal/i));
    expect(screen.getByText(/Modal Content/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("presentation"));
    expect(screen.queryByText(/Modal Content/i)).toBeNull();
  });
});
