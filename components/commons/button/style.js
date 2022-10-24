import styled from "styled-components";
import { colors } from "../../variables/colors";

export const Button = styled.div`
  a,
  div {
    position: relative;
    cursor: pointer;
    padding: 12px 24px;
    font-weight: 400;
    color: white;
    text-align: center;
    font-size: 16px;
    line-height: 26px;
    box-sizing: border-box;
    display: block;
    color: ${colors.white};
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.3s;
      border-top: 1px solid ${colors.blue};
      border-bottom: 1px solid ${colors.blue};
      transform: scale(0.1, 1);
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: all 0.3s;
      background-color: ${colors.blue};
      z-index: -1;
    }

    &:hover {
      color: ${colors.white};
      &::after {
        opacity: 0;
        transform: scale(0.1, 1);
      }
      &::before {
        opacity: 1;
        transform: scale(1, 1);
      }
    }
  }
`;
