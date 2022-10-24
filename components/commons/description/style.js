import styled from "styled-components";

import { colors } from "../../variables/colors";
import { fontSize } from "../../mixins/fonts";
import { above, below } from "../../mixins/breakpoints";

export const Description = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media ${below.lg} {
    padding: 72px 0;
    justify-content: flex-start;
  }
  @media ${below.sm} {
    padding: 48px 0;
  }
`;

export const Wrapper = styled.div``;

export const TextContent = styled.div`
  text-align: left;
  max-width: 645px;
  p {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.5;
  }
  ul {
    margin-top: 24px;
    li {
      margin-top: 12px;
      &:nth-child(1) {
        margin-top: 0;
      }
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-weight: 300;
      img {
        width: auto;
        height: 24px;
        margin-right: 12px;
      }
      position: relative;
      font-size: 18px;
      color: ${colors.white};
      strong {
        margin-right: 12px;
        color: ${colors.lightgray};
      }

      a {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const BtnContainer = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Btn = styled.a`
  padding: 12px 30px;
  text-transform: uppercase;
  color: white;
  font-size: 14px;
  background-color: ${colors.blue};
`;

export const SmallHeading = styled.h1`
  color: ${colors.white};
  font-weight: 400;
  /* text-transform: uppercase; */
  /* font-size: ${fontSize.h1}; */
  font-size: 32px;
  line-height: 1.3;
  strong {
    /* font-weight: 400; */
    color: ${colors.blue};
  }
`;

export const LargeHeading = styled.h2`
  margin-top: 12px;
  letter-spacing: 1px;
  color: ${colors.white};
  font-weight: 500;
  font-size: 20px;

  /* font-size: ${fontSize.mega}; */
`;
