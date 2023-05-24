import Image from "next/image";
import FooterShareBox from "./FooterShareBox";
import { useRouter } from "next/router";
function Footer({ t }: any) {
  const { locale } = useRouter();
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
    <section className="bg-[#141421]  relative z-10 ">
      <div className="home-container ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[55px] relative">
          <div
            className={`content-center ${
              locale === "ar" ? "md:pl-[30px] lg:pl-0" : "md:pr-[30px] lg:pr-0"
            }  flex-col sm:block text-center sm:text-left`}
          >
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
            <p
              className={`text-md text-[#FEFEFE] font-[500] text-center ${
                locale === "ar" ? "md:text-right" : "md:text-left"
              }`}
            >
              {t("home:footer_desc")}
            </p>
          </div>

          <div
            className={` relative ${
              locale === "ar"
                ? "md:pr-[30px] pr-0 md:before:block"
                : "md:pl-[30px] pr-0 md:after:block"
            } mt-[30px] md:mt-0 before:hidden md:after:hidden  lg:after:block lg:before:block  before:absolute before:content-[''] before:right-0 before:top-0 before:w-[1px] before:h-full before:border-r-[2.2px] before:border-dashed before:border-auth-border  after:absolute after:content-[''] after:left-0 after:top-0 after:w-[1px] after:h-full after:border-l-[2.2px] after:border-dashed after:border-auth-border order-2 sm:order-none`}
          >
            <FooterShareBox
              title={t("home:footer_title_one")}
              content={map}
              t={t}
            />
          </div>
          <div
            className={` mt-[30px] lg:mt-0 ${
              locale === "ar" ? "lg:pr-[30px]" : "lg:pl-[30px]"
            }  md:mb-0 md:mt-[30px] lg:mt-0 content-center sm:block`}
          >
            <FooterShareBox
              title={t("home:footer_title_two")}
              content={contact}
              t={t}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
