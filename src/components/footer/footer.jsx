import React from "react";

// Utils
import { dataFooter } from "./footer.utils";

// Style
import FooterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FooterWrapper data-testid="Footer-Wrapper">
      <ul>
        {dataFooter.map((item, index) =>
          item.to ? (
            <li key={index} className="item-footer">
              <a href={item.to} target="_blank" rel="noreferrer">
                <img src={item.img} alt="icon footer" />
                <p>{item.text}</p>
              </a>
            </li>
          ) : (
            <li key={index} className="item-footer">
              <img src={item.img} alt="icon footer" />
              <p>{item.text}</p>
            </li>
          )
        )}
      </ul>
    </FooterWrapper>
  );
};

export default Footer;
