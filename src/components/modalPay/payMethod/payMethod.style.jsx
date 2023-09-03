import styled from "styled-components";
import { gris } from "../../../styles/contantStyles";

const PayMethodWrapper = styled.div`
  .list-pay {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .card {
    border-radius: 16px;
    border: 1px solid ${gris};
    padding: 8px;

    img {
      border-right: 1px solid ${gris};
    }

    p {
      padding: 8px;
    }
  }

  .container-card {
    display: flex;
  }

  .card:hover {
    opacity: 0.8;
  }

  .text {
    display: grid;
    align-items: center;
  }

  .select {
    border: 1px solid green;
  }
`;

export default PayMethodWrapper;
