import Markup from "../components/main/markup";
import useLayout from "../hooks/use-layout";
import useTranslate from "../hooks/use-translate";

export default function Home() {
  const {
    Seo,
    Layout,
    LayoutDescription,
    LayoutContent,
    LayoutWrapper,
    Description,
  } = useLayout();

  const { t } = useTranslate();

  return (
    <>
      <Seo
        title={t.main.seo.title}
        description={t.main.description.description}
        keywords={t.main.seo.keywords}
      />

      <Layout>
        <LayoutWrapper>
          <LayoutDescription>
            <Description
              heading={t.main.description.heading}
              description={t.main.description.description}
              btnText={t.main.description.btnText}
              btnLink="/about"
            />
          </LayoutDescription>
          <LayoutContent>
            <Markup />
          </LayoutContent>
        </LayoutWrapper>
      </Layout>
    </>
  );
}
