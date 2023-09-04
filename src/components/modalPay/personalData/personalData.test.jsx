import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PersonalData from "./personalData";
import store from "../../../redux/store";
import { Provider } from "react-redux";

describe("<PersonalData />", () => {
  test("render component", () => {
    render(
      <Provider store={store}>
        <PersonalData />
      </Provider>
    );
    const element = screen.getByTestId("PersonalData-Wrapper");
    expect(element).toBeInTheDocument();
  });

  test("onSubmit llama a setStep con el valor 2", async () => {
    const setStepMock = jest.fn();

    render(
      <Provider store={store}>
        <PersonalData setStep={setStepMock} />
      </Provider>
    );

    const emailInput = screen.getByTestId("email");
    const nameInput = screen.getByTestId("name");
    const phoneInput = screen.getByTestId("phone");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(setStepMock).toHaveBeenCalledWith(2);
    });
  });
});
