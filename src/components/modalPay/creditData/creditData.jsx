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
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
// Utils
import PayIcon from "../../../static/img/product/pay-2.png";
import {
  monthOptions,
  schema,
  typeOptions,
  yearOptions,
} from "./creditData.utils";

const CreditData = ({ setStep }) => {
  const formProvider = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {};

  return (
    <CreditDataWrapper data-testid="CreditData-Wrapper">
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
        <img
          className="icon-pay"
          src={PayIcon}
          alt="pay icon"
          title="pay icon"
        />
      </div>
      <FormProvider {...formProvider}>
        <form onSubmit={formProvider.handleSubmit(onSubmit)}>
          <div className="field">
            <label>Número de la tarjeta</label>
            <Controller
              name="number"
              control={formProvider.control}
              defaultValue=""
              render={({ field }) => <input {...field} />}
            />
            <span>{formProvider.formState.errors.email?.message}</span>
          </div>
          <div className="container-expiration">
            <div className="field">
              <label>Expira en</label>
              <div className="date">
                <Controller
                  name="month"
                  control={formProvider.control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select placeholder="Mes" {...field}>
                      {monthOptions.map((item, index) => (
                        <MenuItem
                          key={`${item.label}-${item.value}-${index}`}
                          value={item.value}
                        >
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <Controller
                  name="year"
                  control={formProvider.control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select placeholder="Año" {...field}>
                      {yearOptions.map((item, index) => (
                        <MenuItem
                          key={`${item.label}-${item.value}-${index}`}
                          value={item.value}
                        >
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <span>{formProvider.formState.errors.name?.message}</span>
              </div>
            </div>
            <div className="field">
              <label>CVC</label>
              <Controller
                name="cvc"
                control={formProvider.control}
                defaultValue=""
                render={({ field }) => (
                  <input type="number" placeholder="Año" {...field} />
                )}
              />
              <span>{formProvider.formState.errors.phone?.message}</span>
            </div>
          </div>
          <div className="field">
            <label>Nombre en la tarjeta</label>
            <Controller
              name="name"
              control={formProvider.control}
              defaultValue=""
              render={({ field }) => (
                <input type="number" placeholder="Año" {...field} />
              )}
            />
            <span>{formProvider.formState.errors.phone?.message}</span>
          </div>
          <div className="field">
            <label>Identificacion del tarjetahabiente</label>
            <div className="identification">
              <Controller
                name="type"
                control={formProvider.control}
                defaultValue=""
                render={({ field }) => (
                  <Select {...field}>
                    {typeOptions.map((item, index) => (
                      <MenuItem
                        key={`${item.label}-${item.value}-${index}`}
                        value={item.value}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <Controller
                name="identification"
                control={formProvider.control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="number"
                    placeholder="Ingresa tu documento"
                    {...field}
                  />
                )}
              />
            </div>
            <span>{formProvider.formState.errors.phone?.message}</span>
          </div>
          <div className="field">
            <label>Número de cuotas</label>
            <Controller
              name="quota"
              control={formProvider.control}
              defaultValue=""
              render={({ field }) => <input type="number" {...field} />}
            />
            <span>{formProvider.formState.errors.phone?.message}</span>
          </div>
          <div className="field">
            <label>Número de cuotas</label>
            <Controller
              name="check"
              control={formProvider.control}
              defaultValue=""
              render={({ field }) => (
                <div className="check">
                  <Checkbox {...field} />
                  <p>
                    Acepto los <span>términos y condiciones</span> para hacer
                    este pago
                  </p>
                </div>
              )}
            />
            <span>{formProvider.formState.errors.phone?.message}</span>
          </div>
          <Button type="submit">Continuar con tu pago seguro</Button>
        </form>
      </FormProvider>
    </CreditDataWrapper>
  );
};

export default CreditData;
