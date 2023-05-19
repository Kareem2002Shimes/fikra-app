import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/src/redux/app/store";
import {
  setAdvanced,
  setPrimary,
  setPro,
} from "@/src/redux/features/pricing/pricingSlice";
function InputRangeSlider({ box, yearly, t }: any) {
  const { locale } = useRouter();
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();
  const pricing = useAppSelector((state) => state.pricing);
  const MAX = 10;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
      direction: locale === "ar" ? "ltr" : "ltr",
      transform: locale === "ar" ? "rotateY(180deg)" : "none",
    };
  };

  useEffect(() => {
    if (yearly) {
      if (value == 0) {
        if (box.id === 1) {
          dispatch(setPrimary(box.price.year));
        } else if (box.id === 2) {
          dispatch(setPro(box.price.year));
        } else if (box.id === 3) {
          dispatch(setAdvanced(box.price.year));
        }
      } else if (value == 5) {
        //calc
        if (box.id === 1) {
          dispatch(setPrimary(box.quantity.year.average * pricing.photoPrice));
        } else if (box.id === 2) {
          dispatch(setPro(box.quantity.year.average * pricing.photoPrice));
        } else if (box.id === 3) {
          dispatch(setAdvanced(box.quantity.year.average * pricing.photoPrice));
        }
      } else {
        //calc
        if (box.id === 1) {
          dispatch(setPrimary(box.quantity.year.max * pricing.photoPrice));
        } else if (box.id === 2) {
          dispatch(setPro(box.quantity.year.max * pricing.photoPrice));
        } else if (box.id === 3) {
          dispatch(setAdvanced(box.quantity.year.max * pricing.photoPrice));
        }
      }
    } else {
      if (value == 0) {
        if (box.id === 1) {
          dispatch(setPrimary(box.price.month));
        } else if (box.id === 2) {
          dispatch(setPro(box.price.month));
        } else if (box.id === 3) {
          dispatch(setAdvanced(box.price.month));
        }
      } else if (value == 5) {
        //calc
        if (box.id === 1) {
          dispatch(setPrimary(box.quantity.month.average * pricing.photoPrice));
        } else if (box.id === 2) {
          dispatch(setPro(box.quantity.month.average * pricing.photoPrice));
        } else if (box.id === 3) {
          dispatch(
            setAdvanced(box.quantity.month.average * pricing.photoPrice)
          );
        }
      } else {
        //calc
        if (box.id === 1) {
          dispatch(setPrimary(box.quantity.month.max * pricing.photoPrice));
        } else if (box.id === 2) {
          dispatch(setPro(box.quantity.month.max * pricing.photoPrice));
        } else if (box.id === 3) {
          dispatch(setAdvanced(box.quantity.month.max * pricing.photoPrice));
        }
      }
    }
  }, [yearly, value, dispatch]);

  return (
    <div
      className={`w-[320px] max-w-full content-center flex-col relative pt-[30px] mx-[5px] ${
        value != 5 &&
        value != 10 &&
        "after:content-[''] after:absolute after:top-[70%]  after:left-[50%] after:translate-x-[-50%] after:w-[16px] after:h-[16px] after:rounded-[50%] after:bg-neutral-600"
      } before:content-[''] before:absolute before:top-[70%]  ${
        locale === "ar" ? "before:left-0" : "before:right-0"
      }  before:w-[16px] before:h-[16px] before:rounded-[50%] before:bg-neutral-600`}
    >
      <input
        min="0"
        max={MAX}
        style={getBackgroundSize() as any}
        type="range"
        value={value}
        step={5}
        onChange={(e) => setValue(e.target.value as any)}
        className={`w-full h-[4px]  z-20 text-white text-sm font-[400] `}
      />
      <div className="absolute top-[-8px] w-full flex justify-between items-center text-sm text-white font-[400]">
        <span>{yearly ? box.quantity.year.min : box.quantity.month.min}</span>
        <span>
          {yearly ? box.quantity.year.min : box.quantity.month.average}{" "}
          {locale === "ar" ? "صورة" : "photos"}
        </span>
        <span>{yearly ? box.quantity.year.min : box.quantity.month.max}</span>
      </div>
    </div>
  );
}

export default InputRangeSlider;
