import styled from "styled-components";
import { media } from "../../mixins/breakpoints";
import { below } from "../../mixins/breakpoints";
import { colors } from "../../variables/colors";

export const LayoutToggle = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const Layout = styled.main`
  min-height: 100vh;
  column-gap: 24px;
  @media ${below.lg} {
    padding-top: 78px;
  }

  ${media}

  margin: 0 auto;
  display: flex;
  perspective: 600px;
  transform: translateZ(0px);
  @media ${below.lg} {
    padding: 0;
    max-width: unset;
    width: 100%;
    overflow: hidden;
  }
`;

export const LayoutWrapper = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(16, 1fr) 32px;
  transition: transform 0.3s ease 0s, opacity 0.3s ease 0s;
  ${media}
  margin: 0 auto;
  @media ${below.lg} {
    padding-top: 78px;
    display: flex;
    flex-direction: column;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &.burger {
    &:hover {
      &::before {
        opacity: 0.15;
      }
    }
    &::before {
      opacity: 0.3;
    }
    transform: translate(-30px, 0%) rotateY(-12deg) scale(0.85, 0.82);
  }
  &.mobile {
    opacity: 0;
    transform: translateY(50px);
  }
`;

export const Description = styled.div`
  padding-left: 24px;
  grid-column: span 5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media ${below.lg} {
    grid-column: unset;
    padding-left: 0;
    margin: 0 24px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -50vw;
      width: 150vw;
      height: 100%;
      background-color: ${colors.black};
    }
  }
`;

export const Content = styled.div`
  padding: 72px 72px 0 72px;
  grid-column: 7/17;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${colors.dark};
  max-height: 100vh;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    width: 1px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${colors.gray};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media ${below.lg} {
    /* padding-top: 48px; */
    /* margin-top: 48px; */
    grid-column: unset;
    padding: 0;
    padding: 0 24px;
    max-height: unset;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media ${below.lg} {
    height: auto;
    padding: 0;
    padding: 48px 0 00px;
  }
`;

export const PaginationContainer = styled.ul`
  grid-template-columns: 48px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  @media ${below.lg} {
    display: none;
  }
`;

export const PaginationItem = styled.li`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transition: all 0.3s linear;
  background-color: ${(props) => (props.current ? colors.blue : colors.white)};
  cursor: pointer;
`;

export const PageInfo = styled.span`
  position: absolute;
  bottom: 50px;
  left: 24px;
  text-transform: uppercase;
  font-size: 12px;
  @media ${below.lg} {
    display: none;
  }
`;
