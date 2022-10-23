import styled from "styled-components";
import { above, below } from "../../mixins/breakpoints";
import { colors } from "../../variables/colors";
import { Button } from "../button/style";

export const CenterForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${below.lg} {
    padding-top: 24px;
    padding-bottom: 48px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 700px;
  width: 100%;
`;

export const SingleFormWrapper = styled.div`
  margin-top: 24px;
  &:nth-child(1) {
    margin-top: 0;
  }

  @media ${above.sm} {
    &:nth-child(odd) {
      margin-right: 12px;
    }
    &:nth-child(even) {
      margin-left: 12px;
    }
    &:nth-child(2) {
      margin-top: 0;
    }
  }

  width: calc(50% - 12px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  border-bottom: 1px solid ${colors.gray};
  border-color: ${(props) =>
    !props.hasError ? `${colors.gray}` : `${colors.red}`};

  @media ${below.sm} {
    width: 100%;
    margin-top: 48px;
  }
  @media ${below.sm} {
    margin-top: calc(48px + 18px);
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 0;
    height: 1px;
    transition: 0.2s 0s linear;
    background-color: ${(props) =>
      !props.hasError ? `${colors.white}` : `${colors.red}`};
    z-index: 10;
  }
  &.focus {
    &::before {
      width: 100%;
    }
  }
`;

export const FullFormWrapper = styled(SingleFormWrapper)`
  width: 100%;
  margin-top: calc(48px + 18px);
  margin-right: 0 !important;
  &::before {
    transition: 0.2s 0.15s linear;
  }
  @media ${below.sm} {
    margin-top: calc(48px + 18px);
  }
`;

export const Label = styled.label`
  font-size: 15px;
  display: block;
  color: ${(props) => (!props.hasError ? `${colors.white}` : `${colors.red}`)};
  left: 0px;
  right: auto;
  bottom: 10px;
  position: absolute;
  transition: 0.2s linear;
  &.focus {
    font-size: 14px;
    bottom: 100%;
  }
  @media ${below.sm} {
    bottom: 100%;
  }
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  display: block;
  height: 35px;
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: 12px 0;
  background-color: transparent;
  color: white;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: 999999999999999999999999s ease-in-out 0s;
    color: white;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  background-color: transparent;
  color: white;
  border: none;
  transition: 0.2s linear;
  padding: 12px 0;
  height: 150px;
  max-height: 35px;
  padding-right: 12px;
  &.focus {
    max-height: 150px;
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

  @media ${below.sm} {
    max-height: 150px;
  }
`;

export const Select = styled.select`
  position: relative;
  width: 100%;
  display: block;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid;
  outline: none;
  padding: 12px;
`;

export const btnWrapper = styled.div`
  margin-top: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.button`
  cursor: pointer;
  padding: 15px 24px;
  text-transform: uppercase;
  font-weight: 400;
  color: white;
  font-size: 14px;
  background-color: ${colors.blue};
  transition: 0.1s linear;
  border: none;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 11px;
  margin-top: 5px;
  color: #b40e0e;
  color: ${colors.red};
  font-weight: 400;
`;

export const ThankYouMessage = styled.p`
  color: ${colors.white};
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -45px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

export const ErrorMessage = styled.p`
  color: ${colors.gray};
  width: 100%;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;
