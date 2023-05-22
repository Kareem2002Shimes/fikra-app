import MainHeading from "./MainHeading";
import Image from "next/image";
import { useRouter } from "next/router";

function HowWorks({ t }: any) {
  const { locale } = useRouter();
  return (
    <section>
      <div className="home-container pt-[150px] md:pt-0 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[200px] place-items-center relative">
        {/* <div
          className={`absolute ${
            locale === "ar" ? "right-0" : "left-0"
          }  top-0 w-[471px] max-w-full  max-h-full h-[313px]`}
          style={{
            background: "rgba(117, 36, 215, 0.41)",
            filter: "blur(162px)",
          }}
        ></div> */}
        <div className="relative w-[483px] h-[442px]  sm:w-[600px] sm:h-[600px] lg:h-[800px] lg:w-[800px] z-10 after:absolute after:content-[''] after:w-[471px] after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:h-[313px] after:blur-[162px] after:z-[-1] after:bg-[rgba(117,36,215,0.41)] order-2 md:order-1">
          <Image
            src="/assets/animations/3D Animation/1080.gif"
            alt="video-animation"
            fill={true}
            className="select-none object-contain lg:object-cover"
            unoptimized={true}
          />
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
    </section>
  );
}

export default HowWorks;
