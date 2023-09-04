import React, { useState } from "react";
// Style
import { PaperStyle, ModalPayWrapper } from "./ModalPay.style";
// Libs
import Dialog from "@mui/material/Dialog";
import { Paper } from "@mui/material";
import PayMethod from "./payMethod/payMethod";
import PersonalData from "./personalData/personalData";
import CreditData from "./creditData/creditData";
import Load from "./loader/load";

const ModalPay = ({ open, onClose }) => {
  const [step, setStep] = useState(0);

  const Component = () => {
    switch (step) {
      case 0:
        return <PayMethod setStep={setStep} />;
      case 1:
        return <PersonalData setStep={setStep} />;
      case 2:
        return <CreditData setStep={setStep} />;
      case 3:
        return <Load onClose={onClose}/>;
      default:
        return <PayMethod setStep={setStep} />;
    }
  };

  const PaperComponent = () => {
    return (
      <Paper style={PaperStyle}>
        <ModalPayWrapper data-testid="ModalPay-Wrapper">
          {Component()}
        </ModalPayWrapper>
      </Paper>
    );
  };

  return (
    <Dialog
      open={open}
      style={{ root: { overflow: "scroll" } }}
      maxWidth="md"
      onClose={onClose}
      PaperComponent={PaperComponent}
    />
  );
};

export default ModalPay;
