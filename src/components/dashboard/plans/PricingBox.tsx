import Image from "next/dist/client/image";
import InputRangeSlider from "./InputRangeSlider";
export default function PricingBox({
  box,
  yearly,
  primary,
  advanced,
  pro,
  setAdvanced,
  setPrimary,
  setPro,
}: any) {
  return (
    <div
      className={`pricing-box relative border-t-[16px]  ${
        box.plan === "Primary plan"
          ? "border-accent-color"
          : "border-neutral-700"
      }`}
    >
      <div className="content-center flex-col mt-[30px] mx-[16px]">
        <h6
          className={`content-center ${
            box.plan === "Primary plan" ? "text-accent-color" : "text-error-100"
          }  bg-sidebar-bg2 h-[48px] font-[600] w-full mb-[10px]`}
        >
          {box.plan}
        </h6>
        <p className="text-center text-md text-neutral-200 w-full  lg:w-[280px]  h-[48px] font-[400] mb-[24px] ">
          {box.desc}
        </p>
        <h2 className="content-center text-white font-[700] mb-[24px]">
          $
          {box.id === 1
            ? primary
            : box.id === 2
            ? pro
            : box.id === 3 && advanced}
          .00 /
          <span className="text-md font-[400]">
            per {yearly ? "yearly" : "month"}
          </span>
        </h2>

        <InputRangeSlider
          box={box}
          yearly={yearly}
          setAdvanced={setAdvanced}
          setPrimary={setPrimary}
          setPro={setPro}
        />
      </div>
      <div className="mx-[24px] mt-[30px]">
        {box.features.map((feature: string) => (
          <div key={box.id} className="flex items-start mb-[15px]">
            <div className="mr-[8px] p-[8px] bg-neutral-700 rounded-[50%] ">
              <Image
                src="/assets/images/dashboard/icons/pricing/arrowIcon.svg"
                alt="arrow-icon"
                width={12}
                height={12}
              />
            </div>
            <span className="text-sm text-neutral-100 font-[400]">
              {feature}
            </span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className=" absolute bottom-[16px] left-[50%] translate-x-[-50%] coloredBtn-pricing w-[calc(100%-32px)] h-[48px] text-white rounded-[8px]"
      >
        Subscribe Now
      </button>
    </div>
  );
}
