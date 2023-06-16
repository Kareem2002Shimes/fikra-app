import Auth from "@/src/components/auth/Auth";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function Login() {
  const { t } = useTranslation();
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
