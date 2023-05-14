import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import { selects } from "./Selects.json";
import { Scrollbar } from "swiper";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/src/redux/app/store";
import {
  setActiveIdea,
  setSelectedChooseStyle,
} from "@/src/redux/features/settings/settingsSlice";
function StyleSlider() {
  const [styleIdeas, setStyleIdeas] = useState<any>(selects[2]);
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);
  useEffect(() => {
    if (settings.activeIdea) {
      const option = styleIdeas.options?.find(
        (op: any) => op.value === settings.activeIdea
      );
      dispatch(setSelectedChooseStyle(option));
    }
  }, [settings.activeIdea, dispatch, styleIdeas.options]);
  return (
    <div className="absolute top-0 left-0 w-full ">
      <Swiper
        scrollbar={{
          draggable: true,
          dragSize: 100,
        }}
        slidesPerView={8}
        modules={[Scrollbar]}
        className="slider-conatiner cursor-grab"
      >
        {styleIdeas.options?.map((item: any) => (
          <SwiperSlide
            key={item.label}
            className="hover:cursor-pointer group relative select-none"
            onClick={() => dispatch(setActiveIdea(item.value))}
          >
            <Image
              src={item.image}
              alt="slider-img"
              fill={true}
              className={`object-cover rounded-[8px] pointer-events-none  ${
                settings.activeIdea === item.value
                  ? "opacity-[1]"
                  : "opacity-[0.5]"
              } group-hover:opacity-[1]  transition-opacity duration-200 ease-in-out`}
            />

            <span
              className={`text-md font-[600] ${
                settings.activeIdea === item.value
                  ? "opacity-[1]"
                  : "opacity-[0.5]"
              }  group-hover:opacity-[1]  transition-opacity duration-200 ease-in-out text-white absolute w-full text-center z-10 bottom-[-40px] left-[50%] translate-x-[-50%]`}
            >
              {item.label}
            </span>
            {settings.activeIdea === item.value && (
              <div className="bg-accent-color absolute top-[5px] left-[5px] z-10 border-[2px] border-neutral-900 rounded-[50%] w-[30px] h-[30px] content-center">
                <Image
                  src="/images/dashboard/icons/home/checkedArrow.svg"
                  alt="arrow-icon"
                  width={14}
                  height={14}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default StyleSlider;
