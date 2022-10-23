import useLayout from "../hooks/use-layout";
import ContactForm from "../components/commons/ContactForm";
import useTranslate from "../hooks/use-translate";

export default function Contact() {
  const {
    Seo,
    Layout,
    LayoutDescription,
    LayoutContent,
    LayoutWrapper,
    Description,
  } = useLayout();

  const { t, en, pl } = useTranslate();

  return (
    <>
      <Seo
        title={t.contact.seo.title}
        description={t.contact.description.description}
        keywords={t.contact.seo.keywords}
      />
      <Layout>
        <LayoutWrapper>
          <LayoutDescription>
            <Description
              heading={t.contact.description.heading}
              description={t.contact.description.description}
              btnText={t.contact.description.btnText}
              list={t.contact.description.list}
              downloadPath={t.contact.description.downloadPath}
            />
          </LayoutDescription>
          <LayoutContent>
            <ContactForm />
          </LayoutContent>
        </LayoutWrapper>
      </Layout>
    </>
  );
}
