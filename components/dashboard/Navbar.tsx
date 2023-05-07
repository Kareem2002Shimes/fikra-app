import Link from "next/link";
import Image from "next/image";
import RoadmapAnimation from "../../public/animations/icons_Animation/roadmap/roadmap.json";
import Lottie from "lottie-react";
function Navbar() {
  return (
    <div className="border-b-[1px] border-input-border ">
      <div className="mx-[30px]  flex justify-between items-center h-[80px]">
        <Link href="/" className="flex items-center">
          <div className="relative w-[27.97px] h-[28px]">
            <Image
              src="/images/auth/logo2.png"
              fill={true}
              alt="logo-img"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative w-[60px] h-[30px] mx-[8px]">
            <Image src="/images/logo-text.svg" alt="logo-img" fill={true} />
          </div>
        </Link>

        <div className="flex items-center">
          <Link
            href="#"
            className="hidden sm:flex content-center border-[1px] rounded-[16px] border-accent-color text-white text-md w-[166px] h-[40px]"
          >
            <Lottie
              className="w-[24px] h-[24px] mx-[8px]"
              animationData={RoadmapAnimation}
            />
            Roadmap
          </Link>

          <div className="flex items-center ml-[0] sm:ml-[25px] md:ml-[50px]">
            <Link
              href="/dashboard/plans"
              className="text-accent-color text-sm font-[500] mx-[8px] md:mx-[0]"
            >
              Need more?
            </Link>
            <span className="hidden md:block text-sm font-[500] text-neutral-100 mx-[8px]">
              You only have two attempts.
            </span>
            <div className="content-center dashed-border-dashboard rounded-[50% w-[56px] h-[56px]">
              <span className="content-center text-md font-[500] text-white">
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
