import React from "react";
// Style
import CreditDataWrapper from "./creditData.style";
// Libs
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller, FormProvider } from "react-hook-form";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
// Utils
import PayIcon from "../../../static/img/product/pay-2.png";
import { schema } from "./creditData.utils";

const CreditData = ({ setStep }) => {
  const formProvider = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {};

  return (
    <CreditDataWrapper>
      <div className="container-personal">
        <IconButton
          onClick={() => {
            setStep(0);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <h4>Paga con tu tarjeta</h4>
      </div>
      <div>
        <h5>Aceptamos</h5>
        <img src={PayIcon} alt="pay icon" title="pay icon" />
      </div>
      <FormProvider {...formProvider}>
        <form onSubmit={formProvider.handleSubmit(onSubmit)}>
          <div className="field">
            <label>Número de la tarjeta</label>
            <Controller
              name="email"
              control={formProvider.control}
              defaultValue=""
              render={({ field }) => <input {...field} />}
            />
            <span>{formProvider.formState.errors.email?.message}</span>
          </div>
          <div className="container-expiration">
            <div className="field">
              <label>Expira en</label>
              <Controller
                name="name"
                control={formProvider.control}
                defaultValue=""
                render={({ field }) => <Select {...field} />}
              />
              <span>{formProvider.formState.errors.name?.message}</span>
            </div>
            <div className="field">
              <label>Celular o Número telefónico</label>
              <Controller
                name="phone"
                control={formProvider.control}
                defaultValue=""
                render={({ field }) => <input type="number" {...field} />}
              />
              <span>{formProvider.formState.errors.phone?.message}</span>
            </div>
          </div>
          <Button type="submit">Continuar con tu pago seguro</Button>
        </form>
      </FormProvider>
    </CreditDataWrapper>
  );
};

export default CreditData;
