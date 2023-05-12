import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Header from "@/components/home/Header";
import Landing from "@/components/home/Landing";
import Companies from "@/components/home/Companies";
import Discover from "@/components/home/Discover";
import TranslateIdeas from "@/components/home/TranslateIdeas";
import ChoosePlace from "@/components/home/ChoosePlace";
import HowWorks from "@/components/home/HowWorks";
import GenerateIdeas from "@/components/home/GenerateIdeas";
import Footer from "@/components/home/Footer";
function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>home page</title>
      </Head>
      <Header />
      <main>
        <Landing />
        <Companies />
        <Discover />
        <TranslateIdeas />
        <ChoosePlace />
        <HowWorks />
        <GenerateIdeas />
        <Footer />
      </main>
    </Fragment>
  );
}

export default HomePage;
