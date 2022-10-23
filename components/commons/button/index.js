import * as S from "./style";
import Link from "next/link";

const Button = (props) => {
  const { href, children, downloadPath } = props;

  const buttonLink = <Link href={href}>{children}</Link>;

  const buttonDownload = (
    <a href={downloadPath} download>
      {children}
    </a>
  );

  return (
    <>
      <S.Button>
        {downloadPath && !href && buttonDownload}
        {!downloadPath && href && buttonLink}
      </S.Button>
    </>
  );
};

export default Button;
