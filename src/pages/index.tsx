import Head from "next/head";
import { Fragment } from "react";
import Header from "../components/home/Header";
import Landing from "../components/home/Landing";
import Companies from "../components/home/Companies";
import Discover from "../components/home/Discover";
import TranslateIdeas from "../components/home/TranslateIdeas";
import ChoosePlace from "../components/home/ChoosePlace";
import HowWorks from "../components/home/HowWorks";
import GenerateIdeas from "../components/home/GenerateIdeas";
import Footer from "../components/home/Footer";

import { useTranslation } from "next-i18next";
import WhatNeed from "../components/home/WhatNeed";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function HomePage() {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Head>
        <title>home page</title>
      </Head>
      <Header t={t} />
      <main>
        <Landing t={t} />
        <Companies t={t} />
        <Discover t={t} />
        <TranslateIdeas t={t} />
        <ChoosePlace t={t} />
        <HowWorks t={t} />
        <WhatNeed t={t} />
        <GenerateIdeas t={t} />
        <Footer t={t} />
      </main>
    </Fragment>
  );
}

export default HomePage;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
