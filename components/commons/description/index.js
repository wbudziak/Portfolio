import * as S from "./style";
import Button from "../button/index";

const Description = (props) => {
  const { heading, description, btnText, btnLink, downloadPath } = props;

  return (
    <>
      <S.Description>
        <S.TextContent>
          <S.SmallHeading dangerouslySetInnerHTML={{ __html: heading }} />
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <S.BtnContainer>
            <Button downloadPath={downloadPath} href={btnLink}>
              {btnText}
            </Button>
          </S.BtnContainer>
        </S.TextContent>
      </S.Description>
    </>
  );
};

export default Description;
