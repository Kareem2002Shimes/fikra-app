import Overlay from "./Overlay";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

function Landing({
  t,
  setPopup,
}: {
  t: any;
  setPopup: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="overflow-hidden relative h-[calc(100vh-65px)] w-full ">
      <Overlay />
      <div className=" px-[16px] sm:px-0 absolute z-[10] w-full text-center left-[50%] translate-x-[-50%] top-[50%] md:top-[65%] translate-y-[-50%]  content-center flex-col">
        <h1 className="text-white  font-[700] w-full text-[30px] md:text-[40px] lg:text-[56px] leading-[52px] lg:leading-[72px] mb-[16px]">
          {t("home:h1_title")}
          <span className="block">{t("home:h1_title_span")}</span>
        </h1>
        <p className="text-neutral-200 text-md lg:text-lg font-[500] mb-[50px] w-full sm:w-[467px] md:w-[539px] lg:w-[677px]">
          {t("home:under_h1")}
        </p>
        <div
          className="content-center w-full flex-col sm:flex-row"
          style={{ direction: "ltr" }}
        >
          <Link
            href="/auth/signup"
            className="coloredBtn w-full sm:w-[208px] h-[56px] mb-[24px] sm:mb-0 sm:mr-[24px] font-[600] rounded-[8px] text-white content-center "
          >
            {t("home:start_btn")}
          </Link>
          <button
            onClick={() => {
              setPopup(true);
              document.body.style.overflow = "hidden";
            }}
            type="button"
            className="nonFilledBtn w-full sm:w-[173px] h-[56.59px] content-center "
          >
            <span className="font-[600] text-white mx-[5px] text-sm">
              {t("home:watch_video")}
            </span>
            <Image
              src="/assets/images/home/play-icon.svg"
              width={24}
              height={24}
              alt="play-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
