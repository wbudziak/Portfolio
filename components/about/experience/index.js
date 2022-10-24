import * as S from "./style";
import { motion } from "framer-motion";

const Experience = (props) => {
  const { experience, heading } = props;

  const mapListItems = experience.map((experience, index) => (
    <S.ListItem
      as={motion.li}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        delay: 0.8 + index * 0.1,
        type: "linear",
      }}
      key={(experience, index)}
    >
      <S.Info>
        <S.Years>{experience.years}</S.Years>
        <S.City>{experience.city}</S.City>
        <S.Point className="point"></S.Point>
      </S.Info>
      <S.Content>
        <S.Title
          dangerouslySetInnerHTML={{ __html: experience.name }}
        ></S.Title>
        <S.YearsMobile>{experience.years}</S.YearsMobile>
        <S.CityMobile>{experience.city}</S.CityMobile>
        <S.Text>
          <ul>
            {experience.list.map((item) => (
              <li key={item} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>
        </S.Text>
      </S.Content>
    </S.ListItem>
  ));

  return (
    <>
      <S.Container>
        <S.Heading>{heading}</S.Heading>
        <S.List>{mapListItems}</S.List>
      </S.Container>
    </>
  );
};

export default Experience;
