import React, { useState } from "react";
// Style
import PayMethodWrapper from "./payMethod.style";
// Utils
import PayIcon from "../../../static/img/product/pay.png";

const PayMethod = ({ setStep }) => {
  const [isSelected, setIsSelected] = useState(null);

  const method = [{ text: "Paga con tus tarjetas", img: PayIcon }];

  const handleChangeCard = (index) => {
    setIsSelected(index);
    setTimeout(() => {
      setStep(1);
    }, 1000);
  };

  return (
    <PayMethodWrapper data-testid='PayMethod-Wrapper'>
      <h4>Escoge un método de pago</h4>
      <ul className="list-pay">
        {method?.map((item, index) => (
          <li
            className={`card ${isSelected === index ? "select" : ""}`}
            key={`${item.text}-${index}`}
            data-testid='card'
            onClick={() => {
              handleChangeCard(index);
            }}
          >
            <div className="container-card">
              <img src={item.img} alt={item.text} />
              <div className="text">
                <p>{item.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </PayMethodWrapper>
  );
};

export default PayMethod;
