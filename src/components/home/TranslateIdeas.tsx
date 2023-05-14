import { useSession } from "next-auth/react";
import LogoAnimation from "./LogoAnimation";
import MainHeading from "./MainHeading";
import Link from "next/link";

function TranslateIdeas({ t }: any) {
  const session = useSession();
  return (
    <section>
      <div className="home-container content-center flex-col">
        <div className="relative w-[400px] h-[400px]">
          <LogoAnimation />
        </div>

        <div className="w-[483px] mx-auto text-center mb-[50px]">
          <MainHeading title={t("home:translate_ideas_section_title")} />
        </div>

        <Link
          href={session.data?.user ? "/dashboard" : "/auth/login"}
          className="coloredBtn w-[273px] h-[48px] text-white rounded-[8px]"
        >
          {t("home:translate_ideas_section_btn")}
        </Link>
      </div>
    </section>
  );
}

export default TranslateIdeas;
