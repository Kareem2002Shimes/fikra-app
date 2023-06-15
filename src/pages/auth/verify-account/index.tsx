import Auth from "@/src/components/auth/Auth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

function VerifyAccount() {
  const { t } = useTranslation();
  return <Auth t={t} />;
}

export default VerifyAccount;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["auth", "common"])),
    },
  };
}
