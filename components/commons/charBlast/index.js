import { useState } from "react";
import * as S from "./style";

const CharBlast = (props) => {
  const [isOnHover, setIsOnHover] = useState(false);

  const charBlastHandler = (e) => {
    setIsOnHover(true);
    setTimeout(() => {
      setIsOnHover(false);
    }, 800);
  };

  return (
    <>
      <S.CharBlast
        className={isOnHover ? "rubber-band" : ""}
        onMouseEnter={charBlastHandler}
      >
        {props.children}
      </S.CharBlast>
    </>
  );
};

export default CharBlast;
