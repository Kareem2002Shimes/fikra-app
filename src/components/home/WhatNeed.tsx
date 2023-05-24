import { useState } from "react";
import NeedCard from "./NeedCard";
import { useRouter } from "next/router";
interface cardContentType {
  id: number;
  title: string;
  desc: string;
}

function WhatNeed({ t }: any) {
  const { locale } = useRouter();
  const cardContent = [
    {
      id: 1,
      title: t("home:what_need_section_item_one_title"),
      desc: t("home:what_need_section_item_one_desc"),
    },
    {
      id: 2,
      title: t("home:what_need_section_item_two_title"),
      desc: t("home:what_need_section_item_two_desc"),
    },
    {
      id: 3,
      title: t("home:what_need_section_item_three_title"),
      desc: t("home:what_need_section_item_three_desc"),
    },
  ];
  return (
    <section className="space-betwwen-sections">
      <div className="home-container">
        <h2 className="font-[700] text-[28px] sm:text-[36px] text-neutral-50 mb-[35px] text-center">
          {t("home:what_need_section_title")}
          <span className="logo-text-color mx-[5px]">
            {locale === "ar" ? (
              <>
                <span>3</span> خطوات
              </>
            ) : (
              "3 steps"
            )}
          </span>
          <span className="block mt-[5px]">
            {t("home:what_need_section_title_span")}
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {cardContent.map((item: cardContentType) => (
            <NeedCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              id={item.id}
              text={t("home:what_need_section_item_step")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatNeed;
