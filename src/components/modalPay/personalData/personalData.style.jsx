import styled from "styled-components";
import { rojo } from "../../../styles/contantStyles";

const PersonalDataWrapper = styled.div`
  .container-personal {
    display: flex;
    gap: 24px;
  }

  .field {
    display: grid;
    gap: 16px;
    margin-bottom: 24px;

    input{
    padding: 8px;
    }

    span {
        font-size: 12px;
        color: ${rojo};
    }
  }
`;

export default PersonalDataWrapper;
