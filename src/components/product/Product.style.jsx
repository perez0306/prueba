import styled from "styled-components";
// Style
import { azulClaro, azulOscuro, size } from "../../styles/contantStyles";

const ProductWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: 24px;

  .icon {
    display: grid;
    justify-content: center;
  }

  h3 {
    color: ${azulClaro};
  }

  h4 {
    color: ${azulOscuro};
  }

  .container-button {
    display: grid;
    justify-content: center;
  }

  @media screen and (min-width: ${size.tablet.max}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .container-icon {
      grid-column: 1;
    }
  }
`;

export default ProductWrapper;
