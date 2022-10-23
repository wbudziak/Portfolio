import { css, styled } from "styled-components";

export const textContent = css`
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  ol {
    list-style-type: decimal;
    list-style-position: inside;
    margin-top: 12px;
    li {
      &:nth-child(1) {
        margin-top: 0;
      }
      font-size: 13px;
      line-height: 23px;
    }
  }

  ul {
    margin-top: 12px;
    li {
      position: relative;
      padding-left: 17px;
      margin-top: 12px;
      font-size: 13px;
      line-height: 23px;
      &::before {
        content: "";
        position: absolute;
        top: 7px;
        left: 0;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: white;
      }
    }
  }
`;
