import styled from "styled-components";
import { colors } from "../../variables/colors";

export const Button = styled.div`
  a {
    cursor: pointer;
    padding: 15px 24px;
    text-transform: uppercase;
    font-weight: 400;
    color: white;
    font-size: 14px;
    background-color: ${colors.blue};
    transition: 0.1s linear;
    display: block;
    a {
      width: 100%;
      height: 100%;
      display: block;
    }
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
