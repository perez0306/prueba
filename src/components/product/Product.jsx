import React, { useState } from "react";
// Style
import ProductWrapper from "./Product.style";
// Utils
import ProductIcon from "../../static/img/product/producto.png";
import CountProduct from "./CountProduct/CountProduct";
import { formattedAmount } from "../../utils/formatMoney";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import ModalPay from "../modalPay/ModalPay";

const Product = () => {
  const [open, setOpen] = useState(false);
  const count = useSelector((state) => state.count);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <ProductWrapper data-testid='Product-Wrapper'>
      <h1>Producto X</h1>
      <div className="container-icon">
        <div className="icon">
          <img src={ProductIcon} alt="producto icon" title="producto icon" />
        </div>
        <h3>Descripción</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="container-detail">
        <h3>Caracteristicas</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <h4>Cantidad</h4>
        <CountProduct />
        <h4>Precio</h4>
        <p>COP $100.000</p>
        <h4>Total</h4>
        <p>COP {formattedAmount(100000 * count)}</p>
      </div>
      <div className="container-button">
        <Button
          onClick={() => {
            setOpen(true);
          }}
          variant="contained"
        >
          Pagar con tarjeta de crédito
        </Button>
      </div>
      {open && <ModalPay open={open} onClose={onClose} />}
    </ProductWrapper>
  );
};

export default Product;
