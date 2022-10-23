import useLayout from "../hooks/use-layout";
import useTranslate from "../hooks/use-translate";
import Experience from "../components/about/experience";
import Technologies from "../components/about/technologies";

export default function About() {
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
        title={t.about.seo.title}
        description={t.about.description.description}
        keywords={t.about.seo.keywords}
      />
      <Layout>
        <LayoutWrapper>
          <LayoutDescription>
            <Description
              heading={t.about.description.heading}
              description={t.about.description.description}
              btnText={t.about.description.btnText}
              btnLink="/projects"
            />
          </LayoutDescription>

          <LayoutContent>
            <Technologies
              mainTechnologyHeading={t.about.mainTechnologies.heading}
              otherTechnologyHeading={t.about.otherTechnologies.heading}
              mainTechnologyList={t.about.mainTechnologies.list}
              otherTechnologyList={t.about.otherTechnologies.list}
            />
            <Experience
              heading={t.about.experience.heading}
              experience={t.about.experience.list}
            />
          </LayoutContent>
        </LayoutWrapper>
      </Layout>
    </>
  );
}
