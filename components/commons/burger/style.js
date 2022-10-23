import styled from "styled-components";
import { colors } from "../../variables/colors";

export const Button = styled.div`
  cursor: pointer;
  height: 30px;
  width: 40px;
  overflow: hidden;
  position: relative;
  &:hover {
    div {
      width: 35px;
    }
  }
`;

export const Burger = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 2px;
  background-color: ${colors.white};
  border-radius: 5px;
  transition: 0.2s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 2px;
    background-color: ${colors.white};
    transition: 0.2s all ease-in-out;
  }

  &::before {
    transform: translateY(-14px);
  }

  &::after {
    transform: translateY(14px);
  }

  &.open {
    transform: translateX(-50px);
    background: transparent;
    &::before {
      transform: rotate(45deg) translate(35px, -35px);
    }
    &::after {
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }
`;
