import Layout from "@/src/components/dashboard/Layout";
import PricingBox from "@/src/components/dashboard/plans/PricingBox";
import { useEffect, useState } from "react";
import QandAProps from "@/src/components/dashboard/plans/QandA";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSession } from "next-auth/react";
import Loading from "@/src/components/Loading";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/src/redux/app/store";
import {
  setAdvanced,
  setPrimary,
  setPro,
} from "@/src/redux/features/pricing/pricingSlice";

function Plans() {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const PricingItems = [
    {
      id: 1,
      plan: t("plans:primary_plan"),
      desc: t("plans:primary_plan_desc"),
      price: { month: 15, year: 30 },
      quantity: {
        month: { min: 20, average: 50, max: 100 },
        year: { min: 120, average: 300, max: 800 },
      },
      features:
        locale === "ar"
          ? [
              { id: 1, title: "مخرجات محدودة (50/شهرياً" },
              { id: 2, title: "تصميم جميع الفراغات التصميمة السكنية" },
              { id: 3, title: "تصميم جميع الفراغات التصميمة السكنية" },
            ]
          : [
              { id: 1, title: "50 designs/mon" },
              { id: 2, title: "Includes only home decors" },
              { id: 3, title: "Basic quality" },
              { id: 4, title: "1 user" },
            ],
    },
    {
      id: 2,
      plan: t("plans:pro_plan"),
      desc: t("plans:pro_plan_desc"),
      price: { month: 35, year: 70 },
      quantity: {
        month: { min: 120, average: 300, max: 800 },
        year: { min: 240, average: 600, max: 1600 },
      },
      features:
        locale === "ar"
          ? [
              { id: 1, title: "مخرجات محدودة (50/شهرياً" },
              { id: 2, title: "تصميم جميع الفراغات التصميمة السكنية" },
              { id: 3, title: "تصميم جميع الفراغات التصميمة السكنية" },
            ]
          : [
              { id: 1, title: "50 designs/mon" },
              { id: 2, title: "Includes only home decors" },
              { id: 3, title: "Basic quality" },
              { id: 4, title: "1 user" },
            ],
    },
    {
      id: 3,
      plan: t("plans:advanced_plan"),
      desc: t("plans:advanced_plan_desc"),
      price: { month: 200, year: 400 },
      quantity: {
        month: { min: 800, average: 1200, max: 2000 },
        year: { min: 1400, average: 2400, max: 4000 },
      },
      features:
        locale === "ar"
          ? [
              { id: 1, title: "مخرجات محدودة (50/شهرياً" },
              { id: 2, title: "تصميم جميع الفراغات التصميمة السكنية" },
              { id: 3, title: "تصميم جميع الفراغات التصميمة السكنية" },
            ]
          : [
              { id: 1, title: "50 designs/mon" },
              { id: 2, title: "Includes only home decors" },
              { id: 3, title: "Basic quality" },
              { id: 4, title: "1 user" },
            ],
    },
  ];
  const { status } = useSession();
  const dispatch = useAppDispatch();
  const pricing = useAppSelector((state) => state.pricing);
  const [yearly, setYearly] = useState<boolean>(false);
  const [showInvitePopup, setInvitePopup] = useState<boolean>(true);
  const [btnType, setBtnType] = useState("month");

  useEffect(() => {
    if (btnType === "month") {
      setYearly(false);
      dispatch(setPrimary(PricingItems[0].price.month));
      dispatch(setPro(PricingItems[1].price.month));
      dispatch(setAdvanced(PricingItems[2].price.month));
    } else {
      setYearly(true);
      dispatch(setPrimary(PricingItems[0].price.year));
      dispatch(setPro(PricingItems[1].price.year));
      dispatch(setAdvanced(PricingItems[2].price.year));
    }
  }, [btnType, setYearly, dispatch]);
  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div>
      {showInvitePopup && (
        <div
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #696FF5 0%, #5D63F5 100%)",
          }}
          className="w-full min-h-[54px] content-center relative text-center flex-col sm:flex-row"
        >
          <p className="font-[500] text-white text-sm order-2 sm:order-1 mb-[8px] sm:mb-0">
            {t("plans:invite_friends_popup")}
            <Link
              href="/dashboard/profile/invite-friend"
              className="underline "
            >
              {locale === "ar"
                ? "ادعو اصدقائك واحصل على محاولات اكثر"
                : "Invite your friends and get more tries."}
            </Link>
          </p>
          <button
            onClick={() => setInvitePopup(false)}
            className={`w-[24px] h-[24px] my-[8px] sm:my-0 static sm:absolute ${
              locale === "ar" ? "right-[72px]" : "left-[72px]"
            }  bg-[#7378FF] rounded-[50%] text-neutral-50 transition-all duration-200 hover:bg-accent-color`}
          >
            x
          </button>
        </div>
      )}
      <Layout t={t}>
        <div className="felx-col w-full overflow-y-scroll">
          <div className="text-center pt-[40px] mb-[26px] ">
            <h2 className="text-neutral-50 font-[700] ">
              {t("plans:plans_title")}
            </h2>
          </div>
          <div className="content-center w-full ">
            <div className="flex justify-between mx-[26px] px-[4px] items-center bg-neutral-700 w-[181px] h-[40px] rounded-[32px] ">
              <button
                type="button"
                className={`pricing-btn text-sm text-neutral-50  transition-all duration-200  hover:bg-accent-color ${
                  !yearly && "bg-accent-color"
                }`}
                datatype="month"
                onClick={(e: any) =>
                  setBtnType(e.target.getAttribute("datatype"))
                }
              >
                {t("plans:monthly")}
              </button>
              <button
                type="button"
                onClick={(e: any) =>
                  setBtnType(e.target.getAttribute("datatype"))
                }
                datatype="year"
                className={`pricing-btn text-sm text-neutral-50 transition-all duration-200  hover:bg-accent-color  ${
                  yearly && "bg-accent-color"
                }`}
              >
                {t("plans:yearly")}
              </button>
            </div>
            <div className="bg-sidebar-bg2 w-[87px] h-[32px] content-center rounded-[16px]">
              <span className="text-xs text-accent-color font-[400]">
                {t("plans:save")} 20%
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
                primary={pricing.primary}
                advanced={pricing.advanced}
                pro={pricing.pro}
                t={t}
              />
            ))}
          </div>
          <div className="content-center py-[40px] flex-col pl-[24px] pr-[30px] w-full">
            <h3 className="font-[700] mb-[40px] text-[#ECECEC] text-center">
              {t("plans:plans_question_title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <QandAProps />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Plans;
export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "dashboard",
        "common",
        "plans",
      ])),
    },
  };
}
