import React from "react";
import { render, screen } from "@testing-library/react";
import CreditData from "./creditData";

describe("<CreditData />", () => {
  test("render component", () => {
    render(<CreditData />);
    const element = screen.getByTestId("CreditData-Wrapper");
    expect(element).toBeInTheDocument();
  });
});
