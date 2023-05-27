import Controls from "@/src/components/dashboard/home/Controls";
import Layout from "@/src/components/dashboard/Layout";
import View from "@/src/components/dashboard/home/View";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

function Dashboard() {
  const { t } = useTranslation();

  const [showControls, setShowControls] = useState(
    typeof window !== "undefined" && window.innerWidth < 1200 ? false : true
  );

  return (
    <Layout t={t}>
      <div className="flex w-full relative ">
        {showControls && <Controls t={t} setShowControls={setShowControls} />}
        <View t={t} setShowControls={setShowControls} />
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
