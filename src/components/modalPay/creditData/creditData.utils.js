import * as yup from "yup";

const regex = /^(?:[0-9]{4}-){3}[0-9]{4}$|^[0-9]{16}$/;

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

export const monthOptions = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
];

export const yearOptions = [
  { label: "2023", value: "2023" },
  { label: "2024", value: "2024" },
  { label: "2025", value: "2025" },
  { label: "2026", value: "2026" },
  { label: "2027", value: "2027" },
  { label: "2028", value: "2028" },
  { label: "2029", value: "2029" },
  { label: "2030", value: "2030" },
  { label: "2031", value: "2031" },
  { label: "2032", value: "2032" },
];

export const typeOptions = [
  { label: "Cedula", value: "CC" },
  { label: "Identificación", value: "TI" },
  { label: "Extranjero", value: "CE" },
];
