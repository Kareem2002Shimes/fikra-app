import MainHeading from "./MainHeading";
import Image from "next/image";
function GenerateIdeas() {
  return (
    <section className="pb-[80px]">
      <div className="home-container  grid grid-cols-2 gap-[70px]">
        <div>
          <MainHeading
            title="Ready for the Next level of interior design?"
            desc="Easier way to design, start now and save your time"
          />
          <button
            type="button"
            className="coloredBtn w-[240px] h-[60px] text-white font-[600] rounded-[8px]"
          >
            Start generating ideas
          </button>
        </div>
        <div>
          <Image
            src="/images/dashboard/styleIdeas/1.jpg"
            alt="generate-img"
            width={730}
            height={450}
            className="rounded-[16px]"
          />
        </div>
      </div>
    </section>
  );
}

export default GenerateIdeas;
