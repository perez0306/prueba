import styled from "styled-components";
import { rojo } from "../../../styles/contantStyles";

const CreditDataWrapper = styled.div`
  overflow-y: scroll;

  .icon-pay {
    width: 60%;
  }

  .container-expiration {
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 3fr;
  }

  .date {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .identification {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 16px;
  }

  .check {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 16px;
  }

  .field {
    display: grid;
    gap: 16px;
    margin-bottom: 24px;

    input {
      padding: 8px;
    }

    span {
      font-size: 12px;
      color: ${rojo};
    }
  }
`;

export default CreditDataWrapper;
