import React from "react";
import { render, screen } from "@testing-library/react";
import ModalPay from "./ModalPay";

describe("<ModalPay />", () => {
  const onClose = jest.fn();
  test("render component", () => {
    render(<ModalPay open={true} onClose={onClose} />);
    const element = screen.getByTestId("ModalPay-Wrapper");
    expect(element).toBeInTheDocument();
  });
});
