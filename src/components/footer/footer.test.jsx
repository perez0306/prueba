import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("<Footer />", () => {

  test("render component", () => {
    render(<Footer />);
    const element = screen.getByTestId("Footer-Wrapper");
    expect(element).toBeInTheDocument();
  });

});
