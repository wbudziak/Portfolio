import useLayout from "../hooks/use-layout";
import useTranslate from "../hooks/use-translate";
import Listing from "../components/projects/listing";

export default function Projects() {
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
        title={t.projects.seo.title}
        description={t.projects.description.description}
        keywords={t.projects.seo.keywords}
      />

      <Layout>
        <LayoutWrapper>
          <LayoutDescription>
            <Description
              heading={t.projects.description.heading}
              description={t.projects.description.description}
              btns={t.projects.description.btns}
            />
          </LayoutDescription>
          <LayoutContent>
            <Listing projects={t.projects.projects} />
          </LayoutContent>
        </LayoutWrapper>
      </Layout>
    </>
  );
}
