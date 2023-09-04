import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "./menu";

function setMatchMedia(query) {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: true,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener(callback) {
      this.onchange = callback;
    },
    removeListener(callback) {
      this.onchange = null;
    },
  }));
}

describe("<Menu />", () => {
  setMatchMedia("(max-width: 600)");

  test("render component", () => {
    render(<Menu />);
    const element = screen.getByTestId("Menu-Wrapper");
    expect(element).toBeInTheDocument();
  });

  test("handleClose cierra el menú", () => {
    render(<Menu />);
    const menuIconButton = screen.getByTestId("menu-icon-button");
    fireEvent.click(menuIconButton);

    const inicioMenuItem = screen.queryByText("Inicio");
    expect(inicioMenuItem).toBeInTheDocument();

    fireEvent.click(inicioMenuItem);
  });
});
