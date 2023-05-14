import { useCallback, useRef, useState } from "react";
import Spaces from "./Spaces.json";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { EffectCoverflow, Navigation } from "swiper";
import { useRouter } from "next/router";
function PlaceSlider() {
  const { locale } = useRouter();
  const [data, setData] = useState(Spaces[0].images);
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    (sliderRef.current as any).swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    (sliderRef.current as any).swiper.slideNext();
  }, []);

  return (
    <div className=" h-[527px] relative">
      <Swiper
        ref={sliderRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={24}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 15,
          // stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Navigation]}
        className="h-[527px] "
      >
        {data?.map((img: string) => (
          <SwiperSlide
            key={img}
            className="relative w-[246px] h-full select-none"
          >
            <Image
              src={img}
              alt="slider-img"
              fill={true}
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center mt-[20px] gap-[24px] justify-center z-40 relative">
        <button
          onClick={handlePrev}
          className="w-[40px] h-[40px] hover:border-transparent  rotate-[180deg] hover:bg-accent-color transition-all duration-200 ease-in cursor-pointer content-center rounded-[50%] border-[1px] border-input-border"
        >
          <Image
            src="/images/slider-arrow.svg"
            width={15}
            height={15}
            alt="slider-img"
            className={`${locale === "ar" && "rotate-[180deg]"}`}
          />
        </button>
        <button
          onClick={handleNext}
          className="w-[40px] h-[40px] hover:border-transparent hover:bg-accent-color transition-all duration-200 ease-in cursor-pointer content-center rounded-[50%] border-[1px] border-input-border"
        >
          <Image
            src="/images/slider-arrow.svg"
            width={15}
            height={15}
            alt="slider-img"
            className={`${locale === "ar" && "rotate-[180deg]"}`}
          />
        </button>
      </div>
    </div>
  );
}

export default PlaceSlider;
