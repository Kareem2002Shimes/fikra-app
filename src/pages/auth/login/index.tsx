import Auth from "@/src/components/auth/Auth";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

function Login() {
  const { t, ready } = useTranslation();
  if (!ready) return <h1>loading translations...</h1>;
  return <Auth t={t} />;
}

export default Login;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["auth", "common"])),
    },
  };
}
