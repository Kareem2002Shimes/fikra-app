import Layout from "@/src/components/dashboard/Layout";
import PricingBox from "@/src/components/dashboard/plans/PricingBox";
import PricingItems from "@/src/data/PricingContent.json";
import { useState } from "react";
import QandAProps from "@/src/components/dashboard/plans/QandA";

function Plans() {
  const [yearly, setYearly] = useState<boolean>(false);
  const [primary, setPrimary] = useState<number>(PricingItems[0].price.month);
  const [pro, setPro] = useState<number>(PricingItems[1].price.month);
  const [advanced, setAdvanced] = useState<number>(PricingItems[2].price.month);

  const handlePrice = (e: any) => {
    const btn = e.target.getAttribute("datatype");
    if (btn === "month") {
      setYearly(false);
      setPrimary(PricingItems[0].price.month);
      setPro(PricingItems[1].price.month);
      setAdvanced(PricingItems[2].price.month);
    } else {
      setYearly(true);
      setPrimary(PricingItems[0].price.year);
      setPro(PricingItems[1].price.year);
      setAdvanced(PricingItems[2].price.year);
    }
  };
  return (
    <Layout>
      <div className="felx-col w-full overflow-y-scroll">
        <div className="text-center pt-[40px] mb-[26px] ">
          <h2 className="text-neutral-50 font-[700] ">Buy a subscription</h2>
        </div>
        <div className="content-center w-full ">
          <div className="flex justify-between mr-[26px] px-[4px] items-center bg-neutral-700 w-[181px] h-[40px] rounded-[32px] ">
            <button
              type="button"
              className={`pricing-btn text-sm text-neutral-50 mr-[27px] transition-all duration-200 ease-in hover:bg-accent-color ${
                !yearly && "bg-accent-color"
              }`}
              datatype="month"
              onClick={handlePrice}
            >
              month
            </button>
            <button
              type="button"
              onClick={handlePrice}
              datatype="year"
              className={`pricing-btn text-sm text-neutral-50 transition-all duration-200 ease-in hover:bg-accent-color  ${
                yearly && "bg-accent-color"
              }`}
            >
              yearly
            </button>
          </div>
          <div className="bg-sidebar-bg2 w-[87px] h-[32px] content-center rounded-[16px]">
            <span className="text-xs text-accent-color font-[400]">
              Save 20%
            </span>
          </div>
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] pl-[24px] pr-[30px] pt-[30px]">
          {PricingItems.map((box) => (
            <PricingBox
              key={box.id}
              box={box}
              yearly={yearly}
              primary={primary}
              advanced={advanced}
              pro={pro}
              setAdvanced={setAdvanced}
              setPrimary={setPrimary}
              setPro={setPro}
            />
          ))}
        </div>
        <div className="content-center py-[40px] flex-col pl-[24px] pr-[30px] w-full">
          <h3 className="font-[700] mb-[40px] text-[#ECECEC] text-center">
            The most questions
            <br />
            common
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <QandAProps />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Plans;
