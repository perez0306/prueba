import * as yup from "yup";

const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

export const schema = yup.object().shape({
    number: yup
      .string()
      .required("El número de la tarjeta es requerido")
      .matches(regex, "Número de tarjeta de crédito inválido"),
    month: yup
      .string()
      .required("El mes de expiración es requerido"),
    year: yup
      .string()
      .required("El año de expiración es requerido")
      .matches(/^\d{4}$/, "El año de expiración debe tener 4 dígitos"),
    cvc: yup
      .string()
      .required("El código CVC es requerido")
      .matches(/^\d{3,4}$/, "El código CVC debe tener 3 o 4 dígitos"),
    name: yup.string().required("El nombre en la tarjeta es requerido"),
    type: yup.string().required("El tipo de documento es requerido"),
    identification: yup
      .string()
      .required("La identificación del tarjetahabiente es requerida")
      .matches(/^\d{8,10}$/, "La identificación debe tener entre 8 y 10 dígitos"),
    quota: yup
      .number()
      .typeError('Ingrese solo numeros')
      .required("El número de cuotas es requerido")
      .integer("El número de cuotas debe ser un número entero")
      .min(1, "El número de cuotas debe ser al menos 1"),
    check: yup.boolean().oneOf([true], "Debes aceptar los términos y condiciones").typeError('Campo requerido'),
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
