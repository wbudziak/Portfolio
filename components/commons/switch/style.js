import styled from "styled-components";

export const SwitchLabel = styled.label`
  position: relative;
  display: block;
  width: 55px;
  height: 24px;
`;
export const SliderRound = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.3s;
  border-radius: 24px;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    height: 24px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: calc(-100% + 24px);
    border-radius: 24px;
    background-color: white;
    transition: 0.3s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  }
`;
export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${SliderRound} {
    background-color: #2196f3;
    &::before {
      left: calc(100% - 24px);
    }
  }
`;
export const SwitchInfo = styled.span`
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 5px;
  color: gray;
  display: block;
`;
