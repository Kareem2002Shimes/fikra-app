import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
function FooterShareBox({
  title,
  content,
  t,
}: {
  title: string;
  content: string[];
  t: any;
}) {
  const { locale } = useRouter();
  const socialLinks = [
    { icon: "facebook-icon", url: "facebook" },
    { icon: "insta-icon", url: "insta" },
    { icon: "twitter-icon", url: "twitter" },
    { icon: "youtube-icon", url: "youtube" },
  ];
  return (
    <>
      <h4 className="font-[700] text-white mb-[16px] hidden sm:block">
        {title}
      </h4>
      <nav className="hidden sm:block">
        <ul className="grid grid-cols-2 gap-[16px]">
          {content.map((item: string) => (
            <li key={item}>
              <Link
                href={`/${item}`}
                className="font-[400] text-[#FEFEFE] text-md hover:text-accent-color transition-all duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {title === t("home:footer_title_one") ? (
        <div className=" mt-[40px] items-center justify-center sm:justify-start hidden md:flex">
          <Image
            src="/assets/images/logo.svg"
            alt="logo-img"
            width={32}
            height={32}
          />
          <p className="font-[400] text-sm text-[#FEFEFE] mx-[10px] content-center md:block">
            <span className="order-2">
              {locale !== "ar" && "©"}
              {t("home:footer_copy_right_span")}
            </span>
            <span className="block">
              {locale === "ar" && "©"} {t("home:footer_copy_right")}
            </span>
          </p>
        </div>
      ) : (
        <nav className="mt-[40px]">
          <span
            className={`text-neutral-200 text-[14px] font-[400] mb-[16px] block text-center ${
              locale === "ar" ? "sm:text-right" : "sm:text-left"
            }`}
          >
            {t("home:follow_on_social_media")}
          </span>
          <ul className="flex items-center gap-[15px]">
            {socialLinks.map((item) => (
              <li
                key={item.url}
                className="w-[56px] h-[56px] sm:border-[1px] border-none border-neutral-700 hover:bg-accent-color transition-all duration-200 hover:border-transparent rounded-[12px]"
              >
                <Link
                  href={`/${item.url}`}
                  className="w-full h-full content-center 
                "
                >
                  <Image
                    src={`/assets/images/social-icons/${item.icon}.svg`}
                    alt="social-icon"
                    width={item.url === "facebook" ? 15 : 22}
                    height={item.url === "facebook" ? 15 : 22}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div className="items-center justify-center sm:justify-start mt-[30px] flex md:hidden">
            <Image
              src="/assets/images/logo.svg"
              alt="logo-img"
              width={32}
              height={32}
            />
            <p className="font-[400] text-sm text-[#FEFEFE] mx-[10px] content-center md:block">
              <span className="order-2 mx-[5px] block">
                © {t("home:footer_copy_right_span")}
              </span>
              <span className="block">{t("home:footer_copy_right")}</span>
            </p>
          </div>
        </nav>
      )}
    </>
  );
}

export default FooterShareBox;
