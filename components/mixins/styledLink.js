import styled from "styled-components";
import { colors } from "../variables/colors";

export const StyledLink = styled.div`
  cursor: pointer;
  color: white;
  position: relative;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.white};
  color: ${(props) => (props.current ? colors.blue : colors.white)};
  padding-bottom: 6px;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  font-weight: 900;
  transition: 0.1s linear;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.current ? "100%" : "0")};
    height: 1px;
    background-color: ${colors.gray};
    transition: 0.1s linear;
  }
  &:hover {
    color: ${colors.blue};

    &::before {
      width: 100%;
    }
  }
`;
