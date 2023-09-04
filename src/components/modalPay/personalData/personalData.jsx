import React from "react";
// Libs
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller, FormProvider } from "react-hook-form";
import Button from "@mui/material/Button";
// Style
import PersonalDataWrapper from "./personalData.style";
// Utils
import { schema } from "./personalData.utils";

const PersonalData = ({ setStep }) => {
  const formProvider = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    setStep(2)
  };

  return (
    <PersonalDataWrapper data-testid='PersonalData-Wrapper'>
      <div className="container-personal">
        <IconButton
          onClick={() => {
            setStep(0);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <h4>Ingresa tus datos</h4>
      </div>
      <FormProvider {...formProvider}>
        <form onSubmit={formProvider.handleSubmit(onSubmit)}>
          <div className="field">
            <label>Correo electrónico</label>
            <Controller
              name="email"
              control={formProvider.control}
              defaultValue=""
              render={({ field }) => <input data-testid='email' {...field} />}
            />
            <span>{formProvider.formState.errors.email?.message}</span>
          </div>
          <div className="field">
            <label>Nombres y Apellidos</label>
            <Controller
              name="name"
              control={formProvider.control}
              defaultValue=""
              render={({ field }) => <input data-testid='name' {...field} />}
            />
            <span>{formProvider.formState.errors.name?.message}</span>
          </div>
          <div className="field">
            <label>Celular o Número telefónico</label>
            <Controller
              name="phone"
              control={formProvider.control}
              defaultValue=""
              render={({ field }) => <input data-testid='phone' type="number" {...field} />}
            />
            <span>{formProvider.formState.errors.phone?.message}</span>
          </div>
          <Button data-testid='submit-button' type="submit">Continuar con tu pago seguro</Button>
        </form>
      </FormProvider>
    </PersonalDataWrapper>
  );
};

export default PersonalData;
