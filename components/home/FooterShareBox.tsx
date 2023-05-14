import Link from "next/link";
import Image from "next/image";
function FooterShareBox({
  title,
  content,
  t,
}: {
  title: string;
  content: string[];
  t: any;
}) {
  const socialLinks = [
    { icon: "facebook-icon", url: "facebook" },
    { icon: "insta-icon", url: "insta" },
    { icon: "twitter-icon", url: "twitter" },
    { icon: "youtube-icon", url: "youtube" },
  ];
  return (
    <div>
      <h4 className="font-[700] text-white mb-[16px]">{title}</h4>
      <nav>
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
        <div className="flex items-center mt-[40px]">
          <Image src="/images/logo.svg" alt="logo-img" width={32} height={32} />
          <p className="font-[400] text-sm text-[#FEFEFE] mx-[10px]">
            {t("home:footer_copy_right_span")}
            <span className="block">{t("home:footer_copy_right")}</span>
          </p>
        </div>
      ) : (
        <nav className="mt-[40px]">
          <ul className="flex items-center gap-[15px]">
            {socialLinks.map((item) => (
              <li className="w-[56px] h-[56px]  border-[1px] border-neutral-700 hover:bg-accent-color transition-all duration-200 hover:border-transparent rounded-[12px]">
                <Link
                  href={`/${item.url}`}
                  className="w-full h-full content-center 
                "
                >
                  <Image
                    src={`/images/social-icons/${item.icon}.svg`}
                    alt="social-icon"
                    width={item.url === "facebook" ? 15 : 22}
                    height={item.url === "facebook" ? 15 : 22}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default FooterShareBox;
