import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  email: yup
    .string()
    .email("El email no es válido")
    .required("El email es requerido"),
  phone: yup
    .number()
    .typeError()
    .min(1000000000, "Mínimo 10 caracteres")
    .max(9999999999, "Maximo 10 caracteres")
    .required("El telefóno es requerido"),
});
