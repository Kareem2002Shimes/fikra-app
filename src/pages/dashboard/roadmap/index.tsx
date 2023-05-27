import Layout from "@/src/components/dashboard/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
function Roadmap() {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const roadmapContent = [
    {
      id: 1,
      title: t("roadmap:completed"),
      icon: "completed-icon",
      box: [
        {
          boxTitle: "السماح باستيراد الصور من موقع",
          date: "الاحد 22",
        },
        {
          boxTitle: "السماح باستيراد الصور من موقع",
          date: "الاحد 22",
        },
        {
          boxTitle: "السماح باستيراد الصور من موقع",
          date: "الاحد 22",
        },
      ],
    },
    {
      id: 2,
      title: t("roadmap:in_progress"),
      icon: "progress-icon",
      box: [
        {
          boxTitle: "السماح باستيراد الصور من موقع",
          date: "الاحد 22",
        },
        {
          boxTitle: "السماح باستيراد الصور من موقع",
          date: "الاحد 22",
        },
        {
          boxTitle: "السماح باستيراد الصور من موقع",
          date: "الاحد 22",
        },
      ],
    },
    {
      id: 3,
      title: t("roadmap:in_plan"),
      icon: "planed-icon",
      box: [
        {
          boxTitle: "السماح باستيراد الصور من موقع",
          date: "الاحد 22",
        },
        {
          boxTitle: "السماح باستيراد الصور من موقع",
          date: "الاحد 22",
        },
        {
          boxTitle: "السماح باستيراد الصور من موقع",
          date: "الاحد 22",
        },
      ],
    },
  ];
  return (
    <Layout t={t}>
      <div
        className={`h-fit w-full mt-[24px] mb-[calc(87px+24px)] md:mb-0 mx-[16px]  ${
          locale === "ar"
            ? "md:mr-[24px] md:ml-[30px]"
            : "md:ml-[24px] md:mr-[30px]"
        }`}
      >
        <div
          className={`bg-neutral-800 h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] py-[16px] px-[12px]  mb-0 rounded-[16px]  `}
        >
          {roadmapContent.map((item) => (
            <div key={item.id}>
              <div className="flex items-center justify-center sm:justify-start pb-[24px] px-[30px] border-b-[1px] border-auth-border">
                <span
                  className={`text-sm md:text-md font-[500] ${
                    item.id === 1
                      ? "text-[#16A34A]"
                      : item.id === 2
                      ? "text-[#EAB308]"
                      : "text-[#9333EA]"
                  }`}
                >
                  {item.title}
                </span>
                <Image
                  src={`/assets/images/dashboard/icons/roadmap/${item.icon}.svg`}
                  alt="roadmap-icon"
                  width={20}
                  height={20}
                  className="mx-[4px]"
                />
              </div>
              <div className="pt-[12px]">
                {item.box.map((box) => (
                  <div className="bg-neutral-900 rounded-[12px] mt-[12px] py-[16px] px-[30px]">
                    <span className="font-[500] text-md text-neutral-50 mb-[8px] block">
                      {box.boxTitle}
                    </span>
                    <span className="font-[600] text-neutral-200 text-xs  mb-[8px] block">
                      {box.date}
                    </span>
                    <button className="font-[400] hover:bg-accent-color hover:border-none duration-200 text-xs block border-input-border text-neutral-200 border rounded-[6px] py-[3px] px-[5px] h-[23px]">
                      الطلبات
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Roadmap;
export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "dashboard",
        "roadmap",
        "common",
      ])),
    },
  };
}
