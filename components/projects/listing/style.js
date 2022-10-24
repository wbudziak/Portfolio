import styled from "styled-components";
import { colors } from "../../variables/colors";
import { below } from "../../mixins/breakpoints";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Btn = styled.div`
  padding: 6px 16px;
  background-color: #202020;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.4);

  cursor: pointer;
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  &:hover,
  &.active {
    background-color: ${colors.blue};
  }
`;

export const Grid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  overflow-y: auto;
  /* flex: 1; */
  padding-right: 24px;
  margin-bottom: 24px;

  @media ${below.lg} {
    margin-bottom: 0;
    padding-bottom: 48px;
  }

  @media ${below.sm} {
    grid-template-columns: 1fr;
    padding-right: 0;
  }

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
`;
