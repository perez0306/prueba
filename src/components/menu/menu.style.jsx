import styled from "styled-components";

// Constants
import { azulOscuro, rojo, blanco, gris, size } from "../../styles/contantStyles";

const MenuWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: ${azulOscuro};

  .imagen {
    padding: 1em;
    justify-self: center;
  }

  .imaLogo {
    padding: 8px 0;
    height: 80px;
  }

  .contacto {
    display: grid;
    justify-self: right;
    padding: 0em 2em 0em 0em;
  }

  .Icotelefono {
    display: flex;
    justify-self: right;
    align-self: flex-end;
  }

  .tamIcoTele {
    align-self: flex-end;
    height: 25px;
  }

  .text1 {
    align-self: top;
  }

  .text2 {
    margin-bottom: auto;
  }

  .BarraMenu {
    display: flex;
    justify-self: center;
    grid-column: 1/3;
    background-color: ${rojo};
    box-shadow: -1px 14px 26px -11px rgba(0, 0, 0, 0.6);
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    list-style: none;
    padding: 12px 24px;
    margin: 0;
  }

  .barra {
    height: 30px;
    background-color: ${gris};
    grid-column: 1/3;
  }

  .ColorBorde {
    margin-left: 1em;
    margin-right: 1em;
  }

  .bordeBarra {
    border-right: solid 1px ${blanco};
    list-style: none;
    padding: 0 1em;
  }

  .textoLink {
    color: white;
    text-decoration: none;
  }

  @media screen and (max-width: ${size.mobile.max}) {
    .BarraMenu {
      display: none;
    }

    .imaLogo {
      height: 50px;
    }

    .contacto {
      padding: 12px;
    }
  }

  @media screen and (max-width: ${size.mobile.min}) {
    .imaLogo {
      height: 40px;
    }
  }
`;

export default MenuWrapper;