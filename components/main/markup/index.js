import * as S from "./style";
import { motion } from "framer-motion";

const Markup = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.Markup
          as={motion.span}
          initial={{ y: 10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 0.1,
          }}
          transition={{
            duration: 0.6,
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
