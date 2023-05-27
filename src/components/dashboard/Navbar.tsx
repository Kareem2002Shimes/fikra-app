import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import { useRouter } from "next/router";
import roadMapAnimation from "@/public/assets/animations/icons_Animation/roadmap/roadmap.json";
function Navbar({ t }: any) {
  const { locale } = useRouter();

  return (
    <div className="border-b-[1px] border-input-border ">
      <div className=" mx-[16px] md:mx-[30px]  flex justify-between items-center h-[72px]">
        <Link href="/" className="flex items-center">
          <div className="relative w-[27.97px] h-[28px]">
            <Image
              src="/assets/images/logo.svg"
              fill={true}
              alt="logo-img"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative w-[60px] h-[30px] mx-[8px]">
            <Image
              src="/assets/images/logo-text.svg"
              alt="logo-img"
              fill={true}
            />
          </div>
        </Link>

        <div className="flex items-center">
          <Link
            href="/dashboard/roadmap"
            style={{ direction: "ltr" }}
            className="hidden sm:flex hover:bg-accent-color hover:border-none duration-200 content-center border-[1px] rounded-[16px] border-accent-color text-white text-md w-[166px] h-[40px]"
          >
            <Lottie
              className="w-[24px] h-[24px] mx-[8px]"
              animationData={roadMapAnimation}
            />
            Roadmap
          </Link>

          <div
            style={{ direction: "ltr" }}
            className={`flex items-center  ${
              locale === "ar"
                ? "mr-[0] sm:mr-[25px] md:mr-[50px]"
                : "ml-[0] sm:ml-[25px] md:ml-[50px]"
            }`}
          >
            <Link
              href="/dashboard/plans"
              className="text-accent-color text-sm font-[500] mx-[8px] md:mx-[0]"
            >
              {t("dashboard:navbar_need_more")}
            </Link>
            <span className="hidden md:block text-sm font-[500] text-neutral-100 mx-[12px]">
              <span>{t("dashboard:navbar_try_attempts")}</span>
              <span className="mx-[3px]">5</span>
              <span>{t("dashboard:navbar_try_attempts_span")}</span>
            </span>
            <div className="content-center dashed-border-dashboard-navbar rounded-[50% w-[40px] h-[40px]">
              <span className="content-center text-xs font-[500] text-white">
                1/3
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
