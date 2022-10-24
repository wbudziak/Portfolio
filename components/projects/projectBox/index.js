import { useState } from "react";
import * as S from "./style";
import { motion } from "framer-motion";

const ProjectBox = (props) => {
  const { index, href, img, name, stack, description } = props;

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
        as={motion.a}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 0.3 + index * 0.05,
          type: "linear",
        }}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        href={href}
        target={"_blank"}
      >
        <S.ImageContainer className="imageContainer">
          <S.Img src={img} />
          <S.Icon className="icon" src="/icons/github.svg"></S.Icon>
        </S.ImageContainer>

        <S.Content>
          <S.Title>{name}</S.Title>
          <S.Description>{description}</S.Description>
          <S.SecondLayer className="secondLayer">
            <S.Stack>
              {stack.map((item, index) => (
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
