import Overlay from "./Overlay";
import Image from "next/image";
import Link from "next/link";
function Landing() {
  return (
    <section className="overflow-hidden relative h-[calc(100vh-65px)] w-full ">
      <Overlay />
      <div className=" px-[16px] sm:px-0 absolute w-full text-center left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-50 content-center flex-col">
        <h1 className="text-white  font-[700] w-full text-[30px] md:text-[40px] lg:text-[56px] leading-[52px] lg:leading-[72px] mb-[16px]">
          Any Space you Have Fikra Had
          <br /> the design for it
        </h1>
        <p className="text-neutral-200 text-md lg:text-lg font-[500] mb-[50px] w-full sm:w-[467px] md:w-[539px] lg:w-[677px]">
          An ai system developed to create interior design for any space you
          have, Home, facilities, companies and much more
        </p>
        <div className="content-center w-full flex-col sm:flex-row">
          <Link
            href="/"
            className="coloredBtn w-full sm:w-[208px] h-[56px] mb-[24px] sm:mb-0 sm:mr-[24px] font-[600] rounded-[8px] text-white content-center "
          >
            Start now for free
          </Link>
          <button
            type="button"
            className="nonFilledBtn w-full sm:w-[173px] h-[56.59px] content-center font-[600] text-white"
          >
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
