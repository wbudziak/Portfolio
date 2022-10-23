import Seo from "../components/head";
import {
  Layout,
  LayoutDescription,
  LayoutContent,
  LayoutWrapper,
} from "../components/commons/layout";
import Description from "../components/commons/description";

const useLayout = (props) => {
  return {
    Seo,
    Layout,
    LayoutDescription,
    LayoutContent,
    LayoutWrapper,
    Description,
  };
};

export default useLayout;
