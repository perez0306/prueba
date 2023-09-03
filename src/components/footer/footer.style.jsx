import styled from "styled-components";

// Contants
import { blanco, gris, size } from "../../styles/contantStyles";

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: ${gris};
  padding: 40px 0px 100px;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column: 4 / 11;
    border-bottom: solid 1px grey;
  }

  .item-footer {
    display: flex;
    column-gap: 12px;
    margin-bottom: 52px;
    
    a {
      display: flex;
      column-gap: 12px;
    }
  }

  p {
    color: ${blanco};
    font-size: 12px;
  }

  img {
    height: 40px;
    border-radius: 8px;
  }

  @media screen and (max-width: ${size.mobile.max}) {
    grid-template-columns: repeat(8, 1fr);

    ul {
      grid-column: 2 / 8;
      grid-template-columns: 1fr 1fr;
      padding: 0px;
    }
  }
`;

export default FooterWrapper;
