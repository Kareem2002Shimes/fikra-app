import LogoAnimation from "./LogoAnimation";
import MainHeading from "./MainHeading";

function TranslateIdeas({ t }: any) {
  return (
    <section>
      <div className="home-container content-center flex-col">
        <div className="relative w-[400px] h-[400px]">
          <LogoAnimation />
        </div>

        <div className="w-[483px] mx-auto text-center mb-[50px]">
          <MainHeading title={t("home:translate_ideas_section_title")} />
        </div>

        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="coloredBtn w-[273px] h-[48px] text-white rounded-[8px]"
        >
          {t("home:translate_ideas_section_btn")}
        </button>
      </div>
    </section>
  );
}

export default TranslateIdeas;
