import MainHeading from "./MainHeading";
import Image from "next/image";

function HowWorks() {
  return (
    <section>
      <div className="home-container grid grid-cols-2 gap-[200px] place-items-center">
        <div className="relative">
          <div
            className="absolute left-0 top-0 w-[720px] h-[478px]"
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
        </div>
        <div className="">
          <div className="w-[462px] max-w-full">
            <MainHeading
              title="How does it work?"
              desc=" Choose the space you want select the style you like take a picture
            you prefer and get the design you dream of"
            />
          </div>

          <button
            type="button"
            className="coloredBtn w-[356px] h-[56px] text-white font-[600] rounded-[8px]"
          >
            Watch the video
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowWorks;
