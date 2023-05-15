import Swiper, { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import Image from "next/image";
import EffectPanorama from "./effect-panorama.esm";
import { useEffect } from "react";
function PlaceSlider({ items }: any) {
  useEffect(() => {
    const swiper = new Swiper(".panorama-slider .swiper", {
      // pass Panorama module
      modules: [Pagination, EffectPanorama],
      // enable "panorama" effect
      effect: "panorama",
      slidesPerView: 1.5,
      loop: true,
      centeredSlides: true,
      grabCursor: true,
      spaceBetween: 24,
      // panorama effect parameters
      panoramaEffect: {
        depth: 150,
        rotate: 45,
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
          panoramaEffect: {
            rotate: 35,
            depth: 150,
          },
        },
        640: {
          slidesPerView: 3,
          panoramaEffect: {
            rotate: 30,
            depth: 150,
          },
        },
        1024: {
          slidesPerView: 4,
          panoramaEffect: {
            rotate: 30,
            depth: 200,
          },
        },
        1200: {
          slidesPerView: 4,
          panoramaEffect: {
            rotate: 25,
            depth: 250,
          },
        },
      },
    } as any);
  }, []);
  return (
    <div style={{ direction: "ltr" }} className="place-slider">
      <div className="panorama-slider select-none">
        <div className="swiper">
          <div className="swiper-wrapper">
            {items.map((slider: string) => (
              <div className="swiper-slide relative">
                <Image
                  src={slider}
                  className="slide-image"
                  alt="slider-img"
                  fill={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceSlider;
