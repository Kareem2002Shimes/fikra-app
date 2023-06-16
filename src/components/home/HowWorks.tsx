import MainHeading from "./MainHeading";
import Image from "next/image";
import { useRouter } from "next/router";

function HowWorks({ t }: any) {
  const { locale } = useRouter();
  return (
    <div className="overflow-hidden space-betwwen-sections">
      <div className="home-container md:pt-0 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[200px] place-items-center relative">
        <div className="relative w-[400px] h-[400px]  z-10 after:absolute after:content-[''] after:w-[471px] after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:h-[313px] after:blur-[162px] after:z-[-1] after:bg-[rgba(117,36,215,0.41)] order-2 md:order-1">
          {/* <Image
            src="/assets/animations/3D Animation/1080.gif"
            alt="video-animation"
            fill={true}
            className="select-none object-contain lg:object-cover"
            unoptimized={true}
          /> */}
        </div>

        <div className="max-w-full">
          <div className="w-[462px] max-w-full">
            <MainHeading
              title={t("home:how_works_section_title")}
              desc={t("home:how_works_section_desc")}
            />
          </div>
          <button
            type="button"
            className="coloredBtn w-[356px] max-w-full h-[56px] text-white font-[600] rounded-[8px]"
          >
            {t("home:how_works_section_btn")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowWorks;
