import Head from "next/head";

function Seo(props) {
  const { title, description, keywords } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
}
export default Seo;
