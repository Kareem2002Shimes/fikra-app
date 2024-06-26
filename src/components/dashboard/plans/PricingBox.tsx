import Image from "next/dist/client/image";
import InputRangeSlider from "./InputRangeSlider";

interface PricingBoxProps {
  box: {
    id: number;
    plan: string;
    desc: string;
    price: {
      month: number;
      year: number;
    };
    quantity: {
      month: {
        min: number;
        average: number;
        max: number;
      };
      year: {
        min: number;
        average: number;
        max: number;
      };
    };
    features: { id: number; title: string }[];
  };
  yearly: boolean;
  primary: number;
  advanced: number;
  pro: number;
  t: any;
}

export default function PricingBox({
  box,
  yearly,
  primary,
  advanced,
  pro,
  t,
}: PricingBoxProps) {
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
            {yearly ? t("plans:per_year") : t("plans:per_month")}
          </span>
        </h2>
        <InputRangeSlider box={box} yearly={yearly} />
      </div>
      <div className="mx-[24px] mt-[30px]">
        {box.features?.map((feature) => (
          <div key={feature.id} className="flex items-start mb-[15px]">
            <div className=" p-[8px] bg-neutral-700 rounded-[50%] ">
              <Image
                src="/assets/images/dashboard/icons/pricing/arrowIcon.svg"
                alt="arrow-icon"
                width={12}
                height={12}
              />
            </div>
            <span className="text-sm mx-[8px] text-neutral-100 font-[400]">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className=" absolute bottom-[16px] left-[50%] translate-x-[-50%] coloredBtn-pricing w-[calc(100%-32px)] h-[48px] text-white rounded-[8px]"
      >
        {t("plans:subscribe_now")}
      </button>
    </div>
  );
}
