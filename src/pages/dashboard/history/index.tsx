import ImageCard from "@/src/components/dashboard/history/ImageCard";
import Layout from "@/src/components/dashboard/Layout";
import { useState } from "react";
import Image from "next/image";
import squareIcon from "@/src/assets/images/dashboard/icons/history/squareDownload-icon.svg";
import fullScreenIcon from "@/src/assets/images/dashboard/icons/history/full-screen.svg";
import shareIcon from "@/src/assets/images/dashboard/icons/history/share.svg";
function History() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [icons, setIcons] = useState([squareIcon, fullScreenIcon, shareIcon]);
  return (
    <Layout>
      <div
        className={`grid overflow-y-scroll w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] py-[24px] pl-[24px] pr-[30px]`}
      >
        {data.map((item: number) => (
          <div
            key={item}
            className="relative group w-[100vw] md:w-[356px] max-w-[100%] h-[279px] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.78)] after:rounded-[16px] after:-z-10 hover:after:z-10 cursor-pointer transition-all duration-300 ease"
          >
            <ImageCard />
            <div className="text-white absolute -z-20 group-hover:z-20 bottom-[30px] left-[50%] translate-x-[-50%]">
              <div className="w-[114px] h-[24px] rounded-[4px] bg-[#2C2C2C]  content-center mb-[8px]">
                <span className="text-xs font-[400]">Download Image</span>
              </div>
              <div className="flex items-center">
                {icons.map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    className="bg-[#2C2C2C] hover:bg-accent-color transition-all duration-300 ease w-[48px] h-[48px] content-center rounded-[8px] mr-[8px] last-of-type:mr-0"
                  >
                    <Image
                      src={icon}
                      alt="download-icon"
                      width={24}
                      height={24}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default History;
