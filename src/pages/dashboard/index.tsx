import Controls from "@/src/components/dashboard/home/Controls";
import Layout from "@/src/components/dashboard/Layout";
import View from "@/src/components/dashboard/home/View";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Dashboard() {
  const { t } = useTranslation();

  return (
    <Layout t={t}>
      <div className="flex w-full ">
        <Controls t={t} />
        <View t={t} />
      </div>
    </Layout>
  );
}

export default Dashboard;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["dashboard", "common"])),
    },
  };
}
