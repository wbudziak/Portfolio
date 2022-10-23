import * as S from "./style";

const ContactFrom = (props) => {
  return (
    <>
      <S.Contact>
        <S.Wrapper>{props.children}</S.Wrapper>
      </S.Contact>
    </>
  );
};
export default ContactFrom;
