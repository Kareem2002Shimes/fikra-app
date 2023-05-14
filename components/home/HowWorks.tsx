import MainHeading from "./MainHeading";
import Image from "next/image";
import { useRouter } from "next/router";
function HowWorks({ t }: any) {
  const { locale } = useRouter();
  return (
    <section>
      <div className="home-container grid grid-cols-2 gap-[200px] place-items-center relative">
        <div
          className={`absolute ${
            locale === "ar" ? "right-0" : "left-0"
          }  top-0 w-[720px] h-[478px]`}
          style={{
            background: " rgba(117, 36, 215, 0.41)",
            filter: "blur(162px)",
          }}
        ></div>
        <Image
          src="/animations/3D Animation/1080.gif"
          alt="video-animation"
          height={613}
          width={630}
          className="relative z-10"
          unoptimized={true}
        />

        <div>
          <div className="w-[462px] max-w-full">
            <MainHeading
              title={t("home:how_works_section_title")}
              desc={t("home:how_works_section_desc")}
            />
          </div>

          <button
            type="button"
            className="coloredBtn w-[356px] h-[56px] text-white font-[600] rounded-[8px]"
          >
            {t("home:how_works_section_btn")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowWorks;
