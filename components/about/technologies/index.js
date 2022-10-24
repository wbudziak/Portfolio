import * as S from "./style";
import Image from "next/image";
import { motion } from "framer-motion";

const Technologies = (props) => {
  const {
    mainTechnologyHeading,
    otherTechnologyHeading,
    mainTechnologyList,
    otherTechnologyList,
  } = props;

  return (
    <>
      <S.Heading>{mainTechnologyHeading}</S.Heading>
      <S.List>
        {mainTechnologyList.map((technology, index) => (
          <S.ListItem
            as={motion.li}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.3 + index * 0.05,
              type: "linear",
            }}
            key={(technology.name, index)}
          >
            <Image src={technology.img} alt="html" width={24} height={24} />
            <span> {technology.name}</span>
          </S.ListItem>
        ))}
      </S.List>
      <S.Heading>{otherTechnologyHeading}</S.Heading>
      <S.SecondList>
        {otherTechnologyList.map((technology, index) => (
          <S.SecondListItem
            as={motion.li}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.3 + index * 0.05,
              type: "linear",
            }}
            key={(technology, index)}
          >
            <span>{technology}</span>
          </S.SecondListItem>
        ))}
      </S.SecondList>
    </>
  );
};

export default Technologies;
