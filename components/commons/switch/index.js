import { Fragment } from "react";
import * as S from "./style";
function Switch(props) {
  const { onClick, property } = props;
  return (
    <Fragment>
      <S.SwitchInfo>{property}</S.SwitchInfo>
      <S.SwitchLabel>
        <S.SwitchInput onClick={onClick} type="checkbox" />
        <S.SliderRound />
      </S.SwitchLabel>
    </Fragment>
  );
}
export default Switch;
