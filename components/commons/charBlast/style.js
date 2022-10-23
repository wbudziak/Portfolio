import styled from "styled-components";

export const CharBlast = styled.span`
  &.rubber-band {
    display: inline-block;
    animation: rubberband 800ms alternate ease-out;
  }
  @keyframes rubberband {
    0% {
      transform: scaleX(1);
    }
    40% {
      transform: scaleX(1.12) scaleY(0.75);
    }
    55% {
      transform: scaleX(0.85) scaleY(1);
    }
    65% {
      transform: scaleX(1.09) scaleY(0.85);
    }
    75% {
      transform: scaleX(0.9) scaleY(1);
    }
    90% {
      transform: scaleX(1.05) scaleY(0.95);
    }
    100% {
      transform: scaleX(1) scaleY(1);
    }
  }
`;
