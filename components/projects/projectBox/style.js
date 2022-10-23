import styled from "styled-components";
import { colors } from "../../variables/colors";
import { below } from "../../mixins/breakpoints";

export const Box = styled.a`
  display: block;
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  &:hover {
    .imageContainer {
      position: relative;
      svg {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
      &::before {
        background: #3ec3fc;
        opacity: 0.6;
      }
    }
    .secondLayer {
      opacity: 1;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0;
    transition: 0.3s linear;
  }

  &::before {
    content: "";
    opacity: 0.1;
    background-color: ${colors.dark};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.3s linear;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 12px;
  background-color: ${colors.black};
  position: relative;
  min-height: 82px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
`;

export const Title = styled.span`
  display: block;
  font-size: 18px;
  color: ${colors.white};
  font-weight: 400;
`;

export const Description = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${colors.white};
`;

export const SecondLayer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${colors.black};
  padding: 12px;
  opacity: 0;
  transition: 0.3s linear;
`;

export const Stack = styled.ul`
  transition: 0.3s linear;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
`;

export const StackItem = styled.li`
  padding: 6px 12px;
  box-sizing: border-box;
  background-color: ${colors.blue};
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
`;
