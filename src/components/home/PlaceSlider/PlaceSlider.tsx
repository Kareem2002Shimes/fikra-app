import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import EffectPanorama from "./effect-panorama.esm";
import "swiper/scss";
import "swiper/scss/pagination";
import "./effect-panorama.scss";
import "./main.scss";

function PlaceSlider() {
  return (
    <Swiper
      modules={[Pagination, EffectPanorama]}
      effect={"panorama" as any}
      spaceBetween={50}
      slidesPerView={3}
    >
      <SwiperSlide>
        <img src="/assets/images/dashboard/styleIdeas/1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/dashboard/styleIdeas/1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/dashboard/styleIdeas/1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/dashboard/styleIdeas/1.jpg" />
      </SwiperSlide>
      ...
    </Swiper>
  );
}

export default PlaceSlider;
