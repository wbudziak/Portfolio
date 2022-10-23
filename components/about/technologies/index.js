import * as S from "./style";
import Image from "next/image";

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
        {mainTechnologyList.map((technology) => (
          <S.ListItem key={technology.name}>
            <Image src={technology.img} alt="html" width={24} height={24} />
            <span> {technology.name}</span>
          </S.ListItem>
        ))}
      </S.List>
      <S.Heading>{otherTechnologyHeading}</S.Heading>
      <S.SecondList>
        {otherTechnologyList.map((technology) => (
          <S.SecondListItem key={technology}>
            <span>{technology}</span>
          </S.SecondListItem>
        ))}
      </S.SecondList>
    </>
  );
};

export default Technologies;
