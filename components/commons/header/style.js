import styled from "styled-components";
import { colors } from "../../variables/colors";
import { below } from "../../mixins/breakpoints";
import { fontSize } from "../../mixins/fonts";

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  min-width: 80px;
  height: 100%;
  z-index: 10;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.6);
  @media ${below.lg} {
    width: 100%;
    height: auto;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.dark};
  flex-direction: column;
  @media ${below.lg} {
    flex-direction: row;
    padding: 15px 24px;
  }
`;

export const Avatar = styled.img`
  margin-top: 32px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: contain;
  cursor: pointer;
  display: block;
  overflow: hidden;
  @media ${below.lg} {
    margin-top: 0;
    height: 48px;
    width: 48px;
    order: 2;
  }
`;

export const Socials = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${below.lg} {
    display: none;
  }
`;

export const SocialItem = styled.li`
  margin-top: 24px;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  &:hover {
    opacity: 0.6;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
`;

export const Bottom = styled.div``;

export const Language = styled.span`
  margin: 24px 0 12px 0;
  display: block;
  cursor: pointer;
  transition: 0.2s linear;
  color: ${colors.white};
  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
  font-weight: 400;

  @media ${below.lg} {
    display: none;
  }
`;

export const Nav = styled.ul`
  position: fixed;
  top: 0%;
  left: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 0 24px 24px;
  justify-content: center;
  background-color: ${colors.dark};
  z-index: -1;
  border-left: 1px solid ${colors.gray};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  transform: translateX(-100%);

  @media ${below.lg} {
    left: 0;
    top: 78px;
    height: calc(100vh - 78px);
    max-height: calc(100vh - 78px);
    overflow: auto;
    border-left: none;
    border-top: 1px solid ${colors.gray};
  }

  @media ${below.lg} {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const NavItem = styled.li`
  position: relative;
  margin-top: 40px;
  transform: translateX(-20px);
  transition: 0.3s linear all;
  max-width: 200px;
  &:hover {
    transform: translateX(-4px);
  }
  &:nth-child(1) {
    margin-top: 0;
  }
  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: -20px;
    width: 30px;
    height: 1px;
    background-color: ${colors.gray};
  }

  @media ${below.lg} {
    margin-top: 30px;
    max-width: 50%;
  }
`;

export const NavItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 20px;
`;

export const NavItemDescription = styled.span`
  margin-top: 5px;
  color: ${colors.gray};
  font-size: 13px;
`;

export const BurgerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media ${below.lg} {
    position: unset;
    transform: translate(0);
    left: unset;
  }
`;
