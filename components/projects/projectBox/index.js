import { useState } from "react";
import * as S from "./style";
import { motion } from "framer-motion";

const ProjectBox = (props) => {
  const [onMouseHover, setOnMouseHover] = useState(false);

  const onMouseEnterHandler = () => {
    setOnMouseHover(true);
  };

  const onMouseLeaveHandler = () => {
    setOnMouseHover(false);
  };

  return (
    <>
      <S.Box
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        href={props.href}
        target={"_blank"}
      >
        <S.ImageContainer className="imageContainer">
          <S.Img src={props.img} />

          <svg
            width="48"
            height="26"
            viewBox="0 0 48 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.1984 12.3746C47.0925 12.2564 44.5585 9.44659 40.4427 6.60363C35.598 3.25713 29.8403 0.8125 24 0.8125C18.1588 0.8125 12.4012 3.25778 7.55728 6.60363C3.44138 9.44659 0.907406 12.2564 0.801563 12.3746C0.482813 12.7306 0.482813 13.2693 0.801563 13.6254C0.907406 13.7436 3.44138 16.5533 7.55728 19.3964C11.3167 21.9932 17.137 25.0779 23.6599 25.1826C23.8987 25.1892 24.1012 25.1892 24.3401 25.1826C30.863 25.0779 36.6833 21.9932 40.4427 19.3964C44.5585 16.5534 47.0926 13.7436 47.1984 13.6254C47.5172 13.2693 47.5172 12.7306 47.1984 12.3746V12.3746ZM34.3125 13C34.3125 18.6823 29.6898 23.3125 24 23.3125C18.3187 23.3125 13.6875 18.6907 13.6875 13C13.6875 7.31772 18.3101 2.6875 24 2.6875C29.6814 2.6875 34.3125 7.30928 34.3125 13ZM2.7975 12.9996C3.75591 12.0332 5.81522 10.0858 8.62294 8.14637C10.4042 6.916 12.6716 5.56937 15.2543 4.52125C10.6617 9.25712 10.6679 16.749 15.254 21.4785C12.6869 20.4366 10.433 19.1009 8.66109 17.88C5.841 15.9368 3.76228 13.9718 2.7975 12.9996V12.9996ZM39.3771 17.8536C37.5958 19.0839 35.3285 20.4304 32.7458 21.4787C37.3383 16.7428 37.3321 9.25103 32.7461 4.52153C35.3132 5.56328 37.5671 6.89903 39.3389 8.11994C42.1589 10.0632 44.2377 12.0281 45.2025 13.0003C44.2442 13.9669 42.1848 15.9142 39.3771 17.8536Z"
              fill="white"
            />
            <path
              d="M19.3125 13C19.3125 15.5847 21.4153 17.6875 24 17.6875C26.5847 17.6875 28.6875 15.5847 28.6875 13C28.6875 10.4153 26.5847 8.3125 24 8.3125C21.4153 8.3125 19.3125 10.4153 19.3125 13ZM26.8125 13C26.8125 14.5508 25.5508 15.8125 24 15.8125C22.4492 15.8125 21.1875 14.5508 21.1875 13C21.1875 11.4492 22.4492 10.1875 24 10.1875C25.5508 10.1875 26.8125 11.4492 26.8125 13Z"
              fill="white"
            />
          </svg>
        </S.ImageContainer>

        <S.Content>
          <S.Title>{props.name}</S.Title>
          <S.Description>{props.description}</S.Description>
          <S.SecondLayer className="secondLayer">
            <S.Stack>
              {props.stack.map((item, index) => (
                <S.StackItem
                  as={motion.li}
                  initial={{ opacity: 0, y: -10 }}
                  animate={
                    onMouseHover ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
                  }
                  transition={{
                    duration: onMouseHover ? 0.3 : 0,
                    delay: onMouseHover && 0.2 + index * 0.1,
                    type: "linear",
                  }}
                  key={item}
                >
                  {item}
                </S.StackItem>
              ))}
            </S.Stack>
          </S.SecondLayer>
        </S.Content>
      </S.Box>
    </>
  );
};

export default ProjectBox;
