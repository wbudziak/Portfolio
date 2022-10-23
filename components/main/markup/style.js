import styled from "styled-components";
import { colors } from "../../variables/colors";
import { below } from "../../mixins/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-bottom: 72px;
  @media ${below.lg} {
    padding-bottom: 48px;
  }
`;

export const Markup = styled.span`
  /* font-size: 240px; */
  font-size: clamp(11.25rem, 8.4941rem + 15.748vw, 15rem);
  font-weight: 500;
  color: ${colors.lightgray};
`;
