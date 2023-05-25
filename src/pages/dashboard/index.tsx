import Controls from "@/src/components/dashboard/home/Controls";
import Layout from "@/src/components/dashboard/Layout";
import View from "@/src/components/dashboard/home/View";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/src/redux/app/store";

function Dashboard() {
  const { t } = useTranslation();
  const [showControls, setShowControls] = useState(true);
  const settings = useAppSelector((state) => state.settings);
  useEffect(() => {
    const controlsListener = () => {
      return window.innerWidth < 1200
        ? setShowControls(false)
        : setShowControls(true);
    };
    controlsListener();
    if (settings.activeIdea) {
      setShowControls(true);
      window.innerWidth < 768 &&
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }
    window.addEventListener("resize", controlsListener);
    return () => {
      window.removeEventListener("resize", controlsListener);
    };
  }, [settings.activeIdea]);
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
