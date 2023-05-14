import { useState } from "react";
import Image from "next/image";
import LogoAnimation from "../../home/LogoAnimation";
import { toast } from "react-hot-toast";
import dangerIcon from "@/src/assets/images/dashboard/icons/home/danger.svg";
import sunIcon from "@/src/assets/images/dashboard/icons/home/sun.svg";
import flashIcon from "@/src/assets/images/dashboard/icons/home/flash.svg";
function DefaultView() {
  const [btns, setBtns] = useState([
    {
      name: "Determinants",
      icon: dangerIcon,
      text: "This text is an example of text that can",
    },
    {
      name: "Examples",
      icon: sunIcon,
      text: "This text is an example of text that can",
    },
    {
      name: "Capabilities",
      icon: flashIcon,
      text: "This text is an example of text that can",
    },
  ]);
  return (
    <div className="pl-[24px] pr-[64px] w-full">
      <div className="grid grid-cols-3 gap-[32px]">
        {btns.map((btn) => (
          <div key={btn.name} className="content-center flex-col w-[230px]">
            <button className="content-center w-full h-[64px] mb-[15px] bg-[rgba(255,255,255,0.04)] rounded-[8px]">
              <Image src={btn.icon} alt="btn-icon" width={24} height={24} />
              <span className="font-[600] text-white text-md mx-[8px]">
                {btn.name}
              </span>
            </button>
            <span className="text-sm font-[500] text-neutral-300">
              {btn.text}
            </span>
          </div>
        ))}
      </div>
      <div className="w-[280px] h-[280px] relative mx-auto">
        <LogoAnimation />
      </div>
      <button
        type="button"
        onClick={() => {
          toast("Choose Your Settings Now!", {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }}
        className="coloredBtn mx-auto block w-[293.94px] h-[43.29px] text-md rounded-[8px] text-white font-[500]"
      >
        Design a new idea
      </button>
    </div>
  );
}

export default DefaultView;
