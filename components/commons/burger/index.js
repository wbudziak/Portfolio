import { useState } from "react";
import * as S from "./style";

const BurgerMenu = (props) => {
  return (
    <S.Button
      onClick={() => {
        props.onClick();
      }}
    >
      <S.Burger className={props.isOpen ? "open" : ""} />
    </S.Button>
  );
};
export default BurgerMenu;
