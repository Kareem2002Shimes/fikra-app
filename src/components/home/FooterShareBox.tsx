import Link from "next/link";
import Image from "next/image";
import logo from "@/src/assets/images/logo.svg";
import facebookIcon from "@/src/assets/images/social-icons/facebook-icon.svg";
import instaIcon from "@/src/assets/images/social-icons/insta-icon.svg";
import twitterIcon from "@/src/assets/images/social-icons/twitter-icon.svg";
import youtubeIcon from "@/src/assets/images/social-icons/youtube-icon.svg";
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
    { icon: facebookIcon, url: "facebook" },
    { icon: instaIcon, url: "insta" },
    { icon: twitterIcon, url: "twitter" },
    { icon: youtubeIcon, url: "youtube" },
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
          <Image src={logo} alt="logo-img" width={32} height={32} />
          <p className="font-[400] text-sm text-[#FEFEFE] mx-[10px]">
            {t("home:footer_copy_right_span")}
            <span className="block">{t("home:footer_copy_right")}</span>
          </p>
        </div>
      ) : (
        <nav className="mt-[40px]">
          <ul className="flex items-center gap-[15px]">
            {socialLinks.map((item) => (
              <li
                key={item.url}
                className="w-[56px] h-[56px]  border-[1px] border-neutral-700 hover:bg-accent-color transition-all duration-200 hover:border-transparent rounded-[12px]"
              >
                <Link
                  href={`/${item.url}`}
                  className="w-full h-full content-center 
                "
                >
                  <Image
                    src={item.icon}
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
