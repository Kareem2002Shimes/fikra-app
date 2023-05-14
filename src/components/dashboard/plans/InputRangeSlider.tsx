import { useState } from "react";

function InputRangeSlider({
  box,
  yearly,
  setAdvanced,
  setPrimary,
  setPro,
}: any) {
  const [value, setValue] = useState(0);
  const MAX = 10;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    };
  };
  const changePrimary = (value: number) => {
    if (box.id === 1) {
      setPrimary(value);
    }
  };
  const changePro = (value: number) => {
    if (box.id === 2) {
      setPro(value);
    }
  };
  const changeAdvanced = (value: number) => {
    if (box.id === 3) {
      setAdvanced(value);
    }
  };
  if (yearly) {
    if (value == 0) {
      changePrimary(box.price.year);
      changePro(box.price.year);
      changeAdvanced(box.price.year);
    } else if (value == 5) {
      //calc
      changePrimary(box.quantity.year.average * 0.75);
      changePro(box.quantity.year.average * 0.75);
      changeAdvanced(box.quantity.year.average * 0.75);
    } else {
      //calc
      changePrimary(box.quantity.year.max * 0.75);
      changePro(box.quantity.year.max * 0.75);
      changeAdvanced(box.quantity.year.max * 0.75);
    }
  } else {
    if (value == 0) {
      changePrimary(box.price.month);
      changePro(box.price.month);
      changeAdvanced(box.price.month);
    } else if (value == 5) {
      //calc
      changePrimary(box.quantity.month.average * 0.75);
      changePro(box.quantity.month.average * 0.75);
      changeAdvanced(box.quantity.month.average * 0.75);
    } else {
      //calc
      changePrimary(box.quantity.month.max * 0.75);
      changePro(box.quantity.month.max * 0.75);
      changeAdvanced(box.quantity.month.max * 0.75);
    }
  }

  return (
    <div
      className={`w-[320px] content-center flex-col relative pt-[30px] mx-[5px] ${
        value != 5 &&
        value != 10 &&
        "after:content-[''] after:absolute after:top-[70%]  after:left-[50%] after:translate-x-[-50%] after:w-[16px] after:h-[16px] after:rounded-[50%] after:bg-neutral-600"
      } before:content-[''] before:absolute before:top-[70%]  before:right-0  before:w-[16px] before:h-[16px] before:rounded-[50%] before:bg-neutral-600`}
    >
      <input
        min="0"
        max={MAX}
        style={getBackgroundSize()}
        type="range"
        value={value}
        step={5}
        onChange={(e) => setValue(e.target.value as any)}
        className={`w-full h-[4px]  z-20 text-white text-sm font-[400] `}
      />
      <div className="absolute top-[-8px] w-full flex justify-between items-center text-sm text-white font-[400]">
        <span>{yearly ? box.quantity.year.min : box.quantity.month.min}</span>
        <span>
          {yearly ? box.quantity.year.min : box.quantity.month.average} photos
        </span>
        <span>{yearly ? box.quantity.year.min : box.quantity.month.max}</span>
      </div>
    </div>
  );
}

export default InputRangeSlider;
