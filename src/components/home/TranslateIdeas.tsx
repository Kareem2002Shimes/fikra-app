import { useSession } from "next-auth/react";
import LogoAnimation from "./LogoAnimation";
import MainHeading from "./MainHeading";
import Link from "next/link";

function TranslateIdeas({ t }: any) {
  const session = useSession();
  return (
    <div>
      <div className="home-container content-center flex-col">
        <div className="relative w-[400px] max-w-full h-[400px]">
          <LogoAnimation />
        </div>

        <div className="w-[483px] max-w-full mx-auto text-center mb-[50px]">
          <MainHeading title={t("home:translate_ideas_section_title")} />
        </div>

        <Link
          href={session.data?.user ? "/dashboard" : "/auth/login"}
          className="coloredBtn content-center w-[273px] h-[48px] text-white rounded-[8px]"
        >
          {t("home:translate_ideas_section_btn")}
        </Link>
      </div>
    </div>
  );
}

export default TranslateIdeas;
