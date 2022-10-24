import * as S from "./style";
import Button from "../button/index";
import { motion } from "framer-motion";

const Description = (props) => {
  const { heading, description, downloadPath, btns } = props;

  const buttons = btns.map((button) => (
    <Button
      key={button.text}
      downloadPath={button.downloadPath}
      href={button.href}
    >
      {button.text}
    </Button>
  ));

  return (
    <>
      <S.Description
        as={motion.div}
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          type: "linear",
        }}
      >
        <S.TextContent>
          <S.SmallHeading dangerouslySetInnerHTML={{ __html: heading }} />
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <S.BtnContainer>{buttons}</S.BtnContainer>
        </S.TextContent>
      </S.Description>
    </>
  );
};

export default Description;
