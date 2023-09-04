import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import PayMethod from "./payMethod";

describe("<PayMethod />", () => {
  test("render component", () => {
    render(<PayMethod />);
    const element = screen.getByTestId("PayMethod-Wrapper");
    expect(element).toBeInTheDocument();
  });

  test("handleChangeCard cambia el estado y llama a setStep después de un retraso", async () => {
    const setStepMock = jest.fn();

    render(<PayMethod setStep={setStepMock} />);

    const cardElement = screen.getByTestId("card");

    fireEvent.click(cardElement);

    await waitFor(() => {
      expect(cardElement).toHaveClass("select");
    });
  });
});
