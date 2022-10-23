import styled from "styled-components";
import { colors } from "../../variables/colors";

export const CircleGraph = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  animation: carouselAnim 30s linear both infinite;
  z-index: 3;
  margin-bottom: 50px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 128px);
    height: calc(100% - 128px);
    border-radius: 50%;
  }
  @keyframes carouselAnim {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  margin: calc(-80px / 2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};

  span,
  img {
    display: block;
    animation: 30s linear circleAnim both infinite;
    @keyframes circleAnim {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  }
  img {
    width: 60%;
    /* width: 48px; */
    height: auto;
    object-fit: contain;
  }
`;
