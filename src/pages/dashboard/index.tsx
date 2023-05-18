import Controls from "@/src/components/dashboard/home/Controls";
import Layout from "@/src/components/dashboard/Layout";
import View from "@/src/components/dashboard/home/View";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSession } from "next-auth/react";
import Loading from "@/src/components/Loading";

function Dashboard() {
  const { t } = useTranslation();
  const { status } = useSession();
  if (status === "loading") {
    return <Loading />;
  }
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
      ...(await serverSideTranslations(locale, [
        "dashboard",
        "common",
        "profile",
      ])),
    },
  };
}
