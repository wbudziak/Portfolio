import styled from "styled-components";
import { colors } from "../../variables/colors";

export const Heading = styled.h2`
  font-size: 24px;
  margin-top: 48px;
  font-weight: 400;
`;

export const List = styled.ul`
  width: 100%;
  margin-top: 24px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    height: 32px;
    width: 32px;
    object-fit: contain;
  }
  span {
    font-size: 19px;
    /* line-height: 34px; */
    font-weight: 500;
    margin-left: 12px;
  }
`;

export const SecondList = styled.ul`
  width: 100%;
  margin-top: 24px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const SecondListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 15px;
  &::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${colors.white};
    margin-right: 12px;
  }
`;
