import pl from "../locales/pl";
import en from "../locales/en";
import { useRouter } from "next/router";

const useTranslate = (props) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : pl;

  return { t, en, pl, router };
};

export default useTranslate;
