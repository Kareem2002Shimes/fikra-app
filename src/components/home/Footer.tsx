import Image from "next/image";
import FooterShareBox from "./FooterShareBox";

function Footer({ t }: any) {
  const contact = [
    "SU: +966 11232445",
    "www.fikra.ai.com",
    "mail@fikra.ai.com",
    "Riyadh, Saudi Arabia",
  ];
  const map = [
    t("home:footer_website_map_link_one"),
    t("home:footer_website_map_link_two"),
    t("home:footer_website_map_link_three"),
  ];

  return (
    <section className="bg-[#141421]  relative z-10">
      <div className="home-container grid grid-cols-3 py-[55px]">
        <div className="pr-[15px]">
          <div
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="w-[88px] h-[88px] cursor-pointer mb-[24px] rounded-[50%] bg-neutral-800 content-center"
          >
            <Image
              src="/assets/images/logo.svg"
              alt="logo-icon"
              width={56}
              height={56}
            />
          </div>
          <p className="text-md text-[#FEFEFE] font-[500]">
            {t("home:footer_desc")}
          </p>
        </div>
        <div className="border-x-[1.5px] px-[48px] border-dashed border-auth-border">
          <FooterShareBox
            title={t("home:footer_title_one")}
            content={map}
            t={t}
          />
        </div>
        <div className="px-[48px]">
          <FooterShareBox
            title={t("home:footer_title_two")}
            content={contact}
            t={t}
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;
