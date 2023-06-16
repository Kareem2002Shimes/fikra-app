import Layout from "@/src/components/dashboard/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function QandA() {
  const { t } = useTranslation();
  return (
    <Layout t={t}>
      <h1 className="text-white">QandA Page</h1>
    </Layout>
  );
}

export default QandA;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "dashboard",
        "common",
        "home",
      ])),
    },
  };
}
