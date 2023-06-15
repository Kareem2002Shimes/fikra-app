import Head from "next/head";
import { Fragment, useState } from "react";
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
import { useSession } from "next-auth/react";
import Loading from "../components/Loading";
import Popup from "../components/Popup";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

function HomePage({ user }: any) {
  const { t } = useTranslation();
  const [popup, setPopup] = useState<boolean>(false);
  return (
    <Fragment>
      <Head>
        <title>home page</title>
      </Head>
      {popup && <Popup setPopup={setPopup} />}
      <Header t={t} user={user} />
      <section>
        <Landing t={t} setPopup={setPopup} />
        <Companies t={t} />
        <Discover t={t} />
        <TranslateIdeas t={t} />
        <ChoosePlace t={t} />
        <HowWorks t={t} />
        <WhatNeed t={t} />
        <GenerateIdeas t={t} />
        <Footer t={t} />
      </section>
    </Fragment>
  );
}

export default HomePage;

export async function getServerSideProps({
  locale,
  req,
  res,
}: {
  locale: string;
  req: any;
  res: any;
}) {
  const session = await getServerSession(req, res, authOptions);
  return {
    props: {
      user: session?.user || null,
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
