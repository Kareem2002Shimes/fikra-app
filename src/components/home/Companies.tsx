import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import com1 from "@/src/assets/images/companies/1.svg";
import com2 from "@/src/assets/images/companies/2.svg";
import com3 from "@/src/assets/images/companies/3.svg";
import com4 from "@/src/assets/images/companies/4.svg";
import com5 from "@/src/assets/images/companies/5.svg";
import com6 from "@/src/assets/images/companies/6.svg";

function Companies({ t }: any) {
  const [comps, setComps] = useState([com1, com2, com3, com4, com5, com6]);
  return (
    <section className="pt-[50px]">
      <div className="home-container">
        <h2 className="text-white text-md font-[400] text-center mb-[24px] tracking-[0.8px]">
          {t("home:company_section_title")}
        </h2>

        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="w-[1174px] max-w-full relative "
        >
          <div
            className="absolute top-0 left-0 w-full h-full z-10"
            style={{
              background:
                "linear-gradient(90deg, #171727 8.11%, rgba(23, 23, 39, 0) 46.94%, #171727 87.19%)",
            }}
          ></div>
          {comps.map((comp: number) => (
            <SwiperSlide
              key={comp}
              className="px-[12px] first-of-type:pl-0 last-of-type:pr-0 select-none "
            >
              <div className="h-[48px] content-center relative bg-neutral-800">
                <Image
                  src={comp as any}
                  alt="company-img"
                  width={112}
                  height={48}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Companies;
