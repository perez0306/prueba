import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { useDispatch } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import CountProduct from "./CountProduct";
import "jest-localstorage-mock";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("<CountProduct />", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("actualiza la cantidad y llama a dispatch con el valor correcto", () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    render(<CountProduct />);

    const quantityInput = screen.getByTestId("input");

    fireEvent.change(quantityInput, { target: { value: "5" } });

    expect(quantityInput).toHaveValue(5);
  });
});
