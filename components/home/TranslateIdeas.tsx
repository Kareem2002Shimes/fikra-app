import LogoAnimation from "./LogoAnimation";
import MainHeading from "./MainHeading";

function TranslateIdeas() {
  return (
    <section>
      <div className="home-container content-center flex-col">
        <div className="relative w-[400px] h-[400px]">
          <LogoAnimation />
        </div>

        <div className="w-[483px] mx-auto text-center mb-[50px]">
          <MainHeading title="With one click, chose what you want to design" />
        </div>

        <button className="coloredBtn w-[273px] h-[48px] text-white rounded-[8px]">
          Explore more
        </button>
      </div>
    </section>
  );
}

export default TranslateIdeas;
