import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import Selects from "@/src/data/StyleSelects.json";
import { Scrollbar } from "swiper";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/src/redux/app/store";
import {
  setActiveIdea,
  setSelectedChooseStyle,
} from "@/src/redux/features/settings/settingsSlice";
function StyleSlider({ setShowControls }: any) {
  const [styleIdeas, setStyleIdeas] = useState<any>(Selects);
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);
  useEffect(() => {
    if (settings.activeIdea) {
      const option = styleIdeas.options?.find(
        (op: any) => op.value === settings.activeIdea
      );
      dispatch(setSelectedChooseStyle(option));
    }
  }, [
    settings.activeIdea,
    dispatch,
    styleIdeas.options,
    settings.selectedChooseStyle,
  ]);

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Swiper
        scrollbar={{
          draggable: true,
          dragSize: 100,
        }}
        direction={"horizontal"}
        slidesPerView={"auto"}
        spaceBetween={24}
        modules={[Scrollbar]}
        className="slider-conatiner cursor-grab "
      >
        {styleIdeas.options?.map((item: any) => (
          <SwiperSlide
            key={item.label}
            className="hover:cursor-pointer group  select-none group "
            onClick={() => {
              window.innerWidth < 1200 &&
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              setShowControls(true);
              dispatch(setActiveIdea(item.value));
            }}
          >
            <div className="w-[120px] h-[88px] relative">
              <Image
                src={item.image}
                alt="slider-img"
                fill={true}
                className={`object-cover ${
                  settings.activeIdea === item.value
                    ? "opacity-[1]"
                    : "opacity-[0.5]"
                } rounded-[8px] pointer-events-none opacity-[0.5] group-hover:opacity-[1]  transition-opacity duration-200 `}
              />
            </div>

            {settings.activeIdea === item.value && (
              <div className="bg-accent-color absolute top-[5px] left-[5px] z-10 border-[2px] border-neutral-900 rounded-[50%] w-[30px] h-[30px] content-center">
                <Image
                  src="/assets/images/dashboard/icons/home/checkedArrow.svg"
                  alt="arrow-icon"
                  width={14}
                  height={14}
                />
              </div>
            )}
            <span
              className={` font-[600] ${
                settings.activeIdea === item.value
                  ? "opacity-[1]"
                  : "opacity-[0.5]"
              } group-hover:opacity-[1] absolute bottom-[-35px] text-center w-full left-0 z-10 transition-opacity duration-200  text-white text-md `}
            >
              {item.label}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default StyleSlider;
