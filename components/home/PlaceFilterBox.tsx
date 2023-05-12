import { useState } from "react";
import Spaces from "./Spaces.json";
import Image from "next/image";
function PlaceFilterBox() {
  const [active, setActive] = useState(1);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[16px] mb-[80px]">
      {Spaces.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => item.id !== 5 && setActive(item.id)}
          className={`w-[165px] h-[64px] ${
            active === item.id && active !== 5
              ? "space-btn"
              : "border-[1px] border-input-border"
          } content-center rounded-[16px]  text-neutral-50`}
        >
          <div
            style={{
              background:
                active === item.id && item.id !== 5
                  ? "rgba(255, 255, 255, 0.08)"
                  : "transparent",
            }}
            className={`content-center mr-[8px] rounded-[24px] ${
              item.id === 5 ? "order-2 mr-0" : "w-[40px] h-[40px]"
            }`}
          >
            <Image
              src={item.category.icon}
              alt="cat-icon"
              width={15}
              height={15}
            />
          </div>
          <span
            className={`text-md font-[500] ${
              item.id === 5
                ? "text-accent-color text-sm mr-[8px]"
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
