import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import SpaceSlider from "@/src/data/SpaceSlider.json";

function PlaceFilterBox({ t, setItems }: any) {
  const { locale } = useRouter();
  const data = [
    {
      id: 1,
      category: {
        name: t("home:choose_place_section_item_one"),
        icon: "/assets/images/home/space-category-icon.svg",
      },
    },
    {
      id: 2,
      category: {
        name: t("home:choose_place_section_item_two"),
        icon: "/assets/images/home/space-category-icon.svg",
      },
    },
    {
      id: 3,
      category: {
        name: t("home:choose_place_section_item_three"),
        icon: "/assets/images/home/space-category-icon.svg",
      },
    },
    {
      id: 4,
      category: {
        name: t("home:choose_place_section_item_four"),
        icon: "/assets/images/home/space-category-icon.svg",
      },
    },
    {
      id: 5,
      category: {
        name: t("home:choose_place_section_item_five"),
      },
    },
  ];
  const [active, setActive] = useState(1);
  useEffect(() => {
    const selectedItem = SpaceSlider.find((item) => item.id === active);
    setItems(selectedItem?.items);
  }, [setItems, active]);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[16px] mb-[80px]">
      {data.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => {
            item.id === 5
              ? window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              : setActive(item.id);
          }}
          className={`w-[165px] max-w-full h-[64px] ${
            active === item.id && active !== 5
              ? "space-btn-active"
              : "space-btn"
          } content-center rounded-[16px]  text-neutral-50 group `}
        >
          <div
            style={{
              background:
                active === item.id && item.id !== 5
                  ? "rgba(255, 255, 255, 0.08)"
                  : "transparent",
            }}
            className={`content-center ${
              active === item.id && "mx-[8px]"
            } rounded-[24px] ${
              item.id === 5 ? "order-2 mx-[8px]" : "w-[40px] h-[40px]"
            }`}
          >
            {item.id === 5 ? (
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${locale === "ar" && "rotate-[180deg]"}`}
              >
                <path
                  d="M8.96002 0.96967C8.66712 0.676777 8.19225 0.676777 7.89936 0.96967C7.60646 1.26256 7.60646 1.73744 7.89936 2.03033L9.17957 3.31055H0.75C0.335786 3.31055 0 3.64633 0 4.06055C0 4.47476 0.335786 4.81055 0.75 4.81055H9.17848L7.89936 6.08967C7.60646 6.38256 7.60646 6.85744 7.89936 7.15033C8.19225 7.44322 8.66712 7.44322 8.96002 7.15033L11.52 4.59033C11.8129 4.29744 11.8129 3.82256 11.52 3.52967L8.96002 0.96967Z"
                  className="fill-[#0473FB] group-hover:fill-white"
                />
              </svg>
            ) : (
              <Image
                src={item.category.icon as string}
                alt="cat-icon"
                width={15}
                height={15}
              />
            )}
          </div>
          <span
            className={`text-md font-[500] ${
              item.id === 5
                ? "text-accent-color text-sm mr-[8px] group-hover:text-white"
                : "text-neutral-50"
            } `}
          >
            {item.category.name}
          </span>
        </button>
      ))}
    </div>
  );
}

export default PlaceFilterBox;
