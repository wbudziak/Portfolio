import * as S from "./style";
import { motion } from "framer-motion";

const Markup = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.Markup
          as={motion.span}
          initial={{ y: -15, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.3,
            type: "linear",
          }}
        >
          {"</>"}
        </S.Markup>
      </S.Wrapper>
    </>
  );
};
export default Markup;
