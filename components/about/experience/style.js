import styled from "styled-components";
import { colors } from "../../variables/colors";
import { textContent } from "../../mixins/textContent";
import { below } from "../../mixins/breakpoints";

export const Container = styled.div`
  margin-top: 48px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h2`
  font-size: 24px;
  font-weight: 400;
`;

export const List = styled.ul`
  padding-bottom: 48px;
  flex: 1;
  overflow: hidden;
`;

export const ListItem = styled.li`
  margin-top: 48px;
  display: flex;
  @media ${below.sm} {
    margin-top: 24px;
  }
  &:nth-child(1) {
    .point {
      &::before {
        background-color: ${colors.blue};
      }
      &::after {
        animation: anim 2s 1s ease both infinite;
      }
      @keyframes anim {
        0% {
          background-color: ${colors.white};
        }
        50% {
          background-color: ${colors.blue};
        }
        100% {
          background-color: ${colors.white};
        }
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: right;
  width: 35%;
  position: relative;
  padding-right: 25px;
  @media ${below.sm} {
    width: unset;
    padding-right: 8px;
  }
`;

export const Point = styled.div`
  display: block;
  height: calc(100% + 100vh);
  width: 1px;
  background-color: ${colors.gray};
  position: absolute;
  top: 6px;
  right: 0;

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: ${colors.white};
  }
`;

export const Years = styled.span`
  display: block;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.lightgray};
  font-weight: 500;
  @media ${below.sm} {
    display: none;
  }
`;

export const YearsMobile = styled(Years)`
  display: none;
  padding-left: 24px;

  @media ${below.sm} {
    display: block;
  }
`;

export const City = styled.span`
  display: block;
  color: ${colors.white};
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;

  @media ${below.sm} {
    display: none;
  }
`;

export const CityMobile = styled(City)`
  display: none;
  padding-left: 24px;
  @media ${below.sm} {
    display: block;
  }
`;

export const Title = styled.span`
  font-size: 19px;
  line-height: 29px;
  padding-left: 24px;
  display: block;
  color: ${colors.lightgray};
  font-weight: 400;
  strong {
    color: ${colors.blue};
  }
`;

export const Content = styled.div`
  width: 65%;
  @media ${below.sm} {
    width: 100%;
  }
`;

export const Text = styled.div`
  ul {
    padding-left: 36px;

    li {
      font-weight: 300;
      font-size: 15px;
      margin-top: 12px;
      line-height: 25px;
      position: relative;
      padding-left: 12px;

      span {
        position: relative;
        display: block;
        &::after {
          content: "";
          position: absolute;
          top: 11px;
          left: 1px;
          width: 1px;
          left: -33px;
          height: calc(100% + 12px);
          background-color: ${colors.gray};
        }
      }
      &::before {
        content: "";
        position: absolute;
        left: -36px;
        top: 10px;
        width: 32px;
        height: 1px;
        background-color: ${colors.gray};
      }
    }

    ul {
      padding-left: 3px;
      margin-left: 0;

      li {
        position: relative;

        .point,
        span {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #fff;
          border-radius: 50%;
          top: 5px;
          left: -12px;
          &::before {
            display: none;
          }
          &::after {
            display: none;
          }
        }
        &:nth-last-child(1) {
          &::after {
            display: none;
          }
        }

        &::after {
          content: "";
          position: absolute;
          top: 11px;
          left: -36px;
          width: 1px;
          height: calc(100% + 12px);
          background-color: ${colors.gray};
        }
      }
    }
  }
`;
