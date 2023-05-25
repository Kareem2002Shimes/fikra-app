import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import HomeAnimation from "@/public/assets/animations/icons_Animation/home.json";
import HistoryAnimation from "@/public/assets/animations/icons_Animation/histo.json";
import PlansAnimation from "@/public/assets/animations/icons_Animation/fav.json";
import LineAnimation from "@/public/assets/animations/icons_Animation/blue line.json";
import InfoAnimation from "@/public/assets/animations/icons_Animation/info.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import useSidebar from "@/src/hooks/useSidebar";
import SidebarDropDown from "./SidebarDropDown";

function Sidebar({ t }: any) {
  const { pathname, locale } = useRouter();
  const [sidebar, setSidebar] = useSidebar("sidebar", true);
  const [menuItems, setMenuItems] = useState([
    {
      name: t("dashboard:sidebar_link_home"),
      url: "/dashboard",
      icon:
        pathname === "/dashboard" ? (
          <Lottie className="w-[24px] h-[24px]" animationData={HomeAnimation} />
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.76 11.9287C12.1577 11.9287 12.48 12.2511 12.48 12.6487V16.6016C12.48 16.9992 12.1577 17.3216 11.76 17.3216C11.3624 17.3216 11.04 16.9992 11.04 16.6016V12.6487C11.04 12.2511 11.3624 11.9287 11.76 11.9287Z"
              className="fill-[#CDD0FE] group-hover:fill-[#0473FB]  transition-all duration-200"
            />
            <path
              d="M16.7674 21.3594H6.75361C5.71723 21.3581 4.72368 20.9458 3.99085 20.213C3.25803 19.4802 2.84576 18.4866 2.84449 17.4503V10.5594C2.84369 10.0298 2.96128 9.50685 3.18868 9.02865C3.41606 8.55044 3.7475 8.12912 4.15872 7.79552L9.5088 3.43616C10.1462 2.92095 10.9409 2.63989 11.7605 2.63989C12.58 2.63989 13.3748 2.92095 14.0122 3.43616L19.3623 7.79552C19.7734 8.12912 20.1049 8.55044 20.3323 9.02865C20.5597 9.50685 20.6773 10.0298 20.6765 10.5594V17.4465C20.6762 18.4834 20.2644 19.478 19.5315 20.2116C18.7985 20.9453 17.8044 21.3581 16.7674 21.3594ZM11.76 4.07936C11.2699 4.07905 10.795 4.24869 10.416 4.55936L5.06496 8.91873C4.81957 9.11731 4.62182 9.36838 4.48626 9.65347C4.3507 9.93855 4.28075 10.2504 4.28159 10.5661V17.4532C4.28236 18.1077 4.54275 18.7353 5.00564 19.1983C5.46852 19.6611 6.09611 19.9215 6.75074 19.9222H16.7645C17.4191 19.9215 18.0467 19.6611 18.5096 19.1983C18.9724 18.7353 19.2328 18.1077 19.2336 17.4532V10.5594C19.2345 10.2437 19.1645 9.93184 19.0289 9.64675C18.8934 9.36167 18.6956 9.11059 18.4503 8.912L13.104 4.55648C12.7242 4.24775 12.2494 4.07985 11.76 4.08128V4.07936Z"
              className="fill-[#CDD0FE] group-hover:fill-[#0473FB]  transition-all duration-200"
            />
          </svg>
        ),
    },
    {
      name: t("dashboard:sidebar_link_history"),
      url: "/dashboard/history",
      icon:
        pathname === "/dashboard/history" ? (
          <Lottie
            className="w-[24px] h-[24px]"
            animationData={HistoryAnimation}
          />
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7599 4.07989C7.38546 4.07989 3.8399 7.62545 3.8399 11.9999C3.8399 16.3735 7.38552 19.9199 11.7599 19.9199C16.1343 19.9199 19.6799 16.3735 19.6799 11.9999C19.6799 7.62545 16.1343 4.07989 11.7599 4.07989ZM2.3999 11.9999C2.3999 6.83017 6.59018 2.63989 11.7599 2.63989C16.9296 2.63989 21.1199 6.83017 21.1199 11.9999C21.1199 17.1686 16.9297 21.3599 11.7599 21.3599C6.59012 21.3599 2.3999 17.1686 2.3999 11.9999Z"
              className="fill-[#CDD0FE] group-hover:fill-[#0473FB]  transition-all duration-200"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.4451 7.99316C11.8427 7.99316 12.1651 8.31552 12.1651 8.71316V12.2389L14.8622 13.8507C15.2036 14.0547 15.315 14.4968 15.111 14.8382C14.907 15.1795 14.4649 15.2908 14.1235 15.0868L11.0757 13.2654C10.8582 13.1354 10.7251 12.9008 10.7251 12.6474V8.71316C10.7251 8.31552 11.0475 7.99316 11.4451 7.99316Z"
              className="fill-[#CDD0FE] group-hover:fill-[#0473FB]  transition-all duration-200"
            />
          </svg>
        ),
    },
    {
      name: t("dashboard:sidebar_link_plans"),
      url: "/dashboard/plans",
      icon:
        pathname === "/dashboard/plans" ? (
          <Lottie
            className="w-[24px] h-[24px]"
            animationData={PlansAnimation}
          />
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.1456 9.63418C15.5245 9.75475 15.7339 10.1597 15.6133 10.5386L12.6114 19.9735C12.4908 20.3524 12.0859 20.5618 11.707 20.4412C11.3281 20.3207 11.1186 19.9158 11.2392 19.5368L14.2412 10.102C14.3617 9.72305 14.7666 9.51362 15.1456 9.63418Z"
              className="fill-[#CDD0FE] group-hover:fill-[#0473FB]  transition-all duration-200"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.31878 9.63418C8.6977 9.51362 9.10262 9.72305 9.22319 10.102L12.2251 19.5368C12.3457 19.9158 12.1363 20.3207 11.7574 20.4412C11.3784 20.5618 10.9736 20.3524 10.853 19.9735L7.85099 10.5386C7.73041 10.1597 7.93985 9.75475 8.31878 9.63418Z"
              className="fill-[#CDD0FE] group-hover:fill-[#0473FB]  transition-all duration-200"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.2258 3.63571C7.56446 3.42731 8.00794 3.53291 8.21635 3.87156L11.9526 9.94291C12.161 10.2816 12.0554 10.7251 11.7167 10.9335C11.378 11.1418 10.9346 11.0363 10.7262 10.6976L6.98996 4.62626C6.78156 4.2876 6.88715 3.84412 7.2258 3.63571Z"
              className="fill-[#CDD0FE] group-hover:fill-[#0473FB]  transition-all duration-200"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2392 3.63571C16.5779 3.84412 16.6835 4.2876 16.4751 4.62626L12.7388 10.6976C12.5304 11.0363 12.087 11.1418 11.7483 10.9335C11.4096 10.7251 11.304 10.2816 11.5124 9.94291L15.2487 3.87156C15.4571 3.53291 15.9006 3.42731 16.2392 3.63571Z"
              className="fill-[#CDD0FE] group-hover:fill-[#0473FB]  transition-all duration-200"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.43945 10.3162C2.43945 9.91855 2.7618 9.59619 3.15945 9.59619H20.4003C20.7979 9.59619 21.1203 9.91855 21.1203 10.3162C21.1203 10.7138 20.7979 11.0362 20.4003 11.0362H3.15945C2.7618 11.0362 2.43945 10.7138 2.43945 10.3162Z"
              className="fill-[#CDD0FE] group-hover:fill-[#0473FB]  transition-all duration-200"
            />
            <path
              d="M11.7571 20.4811C11.4428 20.4808 11.1321 20.4151 10.8446 20.2879C10.5571 20.1608 10.2994 19.9752 10.0877 19.7429L3.07971 12.0379C2.68439 11.6059 2.44699 11.0528 2.4062 10.4686C2.36541 9.88444 2.52363 9.30369 2.85507 8.82094L5.68707 4.67086C5.92585 4.32097 6.24647 4.03472 6.62107 3.83696C6.99567 3.6392 7.41292 3.53592 7.83651 3.53613H15.6931C16.1169 3.53586 16.5342 3.63919 16.9089 3.83713C17.2835 4.03507 17.6041 4.32164 17.8426 4.67183L20.6678 8.82191C20.9987 9.30489 21.1563 9.88564 21.115 10.4696C21.0736 11.0535 20.8358 11.6063 20.4403 12.0379L13.4266 19.7438C13.2149 19.976 12.9571 20.1616 12.6696 20.2885C12.3822 20.4155 12.0714 20.4811 11.7571 20.4811ZM7.83171 4.97613C7.64247 4.97581 7.45603 5.02184 7.28867 5.1102C7.12133 5.19856 6.97817 5.32657 6.87171 5.48303L4.03875 9.63214C3.88834 9.8472 3.81586 10.1072 3.83331 10.369C3.85077 10.6309 3.95712 10.879 4.13475 11.0721L11.1485 18.7781C11.2264 18.8595 11.3199 18.9243 11.4236 18.9686C11.5272 19.0129 11.6388 19.0356 11.7514 19.0356C11.8641 19.0356 11.9756 19.0129 12.0792 18.9686C12.1828 18.9243 12.2764 18.8595 12.3542 18.7781L19.3699 11.0702C19.5475 10.8772 19.6542 10.6295 19.6725 10.3679C19.6908 10.1062 19.6197 9.84611 19.4707 9.63021L16.6531 5.47919C16.5467 5.32273 16.4035 5.19473 16.2362 5.10636C16.0689 5.018 15.8824 4.97197 15.6931 4.9723L7.83171 4.97613Z"
              className="fill-[#CDD0FE] group-hover:fill-[#0473FB]  transition-all duration-200"
            />
          </svg>
        ),
    },
    {
      name: t("dashboard:sidebar_link_notifications"),
      url: "/dashboard/notifications",
      icon:
        pathname === "/dashboard/notifications" ? (
          <Lottie
            className="w-[24px] h-[24px]"
            animationData={PlansAnimation}
          />
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3242 20.106C10.8422 20.683 11.5072 21 12.1972 21H12.1982C12.8912 21 13.5592 20.683 14.0782 20.105C14.3562 19.798 14.8302 19.773 15.1372 20.05C15.4452 20.327 15.4702 20.802 15.1932 21.109C14.3852 22.006 13.3222 22.5 12.1982 22.5H12.1962C11.0752 22.499 10.0142 22.005 9.20923 21.108C8.93223 20.801 8.95723 20.326 9.26523 20.05C9.57323 19.772 10.0472 19.797 10.3242 20.106ZM12.247 1C16.692 1 19.678 4.462 19.678 7.695C19.678 9.358 20.101 10.063 20.55 10.811C20.994 11.549 21.497 12.387 21.497 13.971C21.148 18.018 16.923 18.348 12.247 18.348C7.57103 18.348 3.34503 18.018 3.00001 14.035C2.99703 12.387 3.50003 11.549 3.94403 10.811L4.10077 10.5472C4.4867 9.88386 4.81603 9.16235 4.81603 7.695C4.81603 4.462 7.80203 1 12.247 1ZM12.247 2.5C8.75203 2.5 6.31603 5.238 6.31603 7.695C6.31603 9.774 5.73903 10.735 5.22903 11.583C4.82003 12.264 4.49703 12.802 4.49703 13.971C4.66403 15.857 5.90903 16.848 12.247 16.848C18.55 16.848 19.834 15.813 20 13.906C19.997 12.802 19.674 12.264 19.265 11.583C18.755 10.735 18.178 9.774 18.178 7.695C18.178 5.238 15.742 2.5 12.247 2.5Z"
              className="fill-[#CDD0FE] group-hover:fill-[#0473FB]  transition-all duration-200"
            />
          </svg>
        ),
    },
    {
      name: t("dashboard:sidebar_link_questions"),
      url: "/dashboard/q&a",
      icon:
        pathname === "/dashboard/q&a" ? (
          <Lottie className="w-[24px] h-[24px]" animationData={InfoAnimation} />
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7599 4.07989C7.38546 4.07989 3.8399 7.62545 3.8399 11.9999C3.8399 16.3735 7.38552 19.9199 11.7599 19.9199C16.1343 19.9199 19.6799 16.3735 19.6799 11.9999C19.6799 7.62545 16.1343 4.07989 11.7599 4.07989ZM2.3999 11.9999C2.3999 6.83017 6.59018 2.63989 11.7599 2.63989C16.9296 2.63989 21.1199 6.83017 21.1199 11.9999C21.1199 17.1686 16.9297 21.3599 11.7599 21.3599C6.59012 21.3599 2.3999 17.1686 2.3999 11.9999Z"
              className="fill-[#CDD0FE] group-hover:fill-[#0473FB]  transition-all duration-200"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.76 7.71948C12.1577 7.71948 12.48 8.04183 12.48 8.43948V8.50019C12.48 8.89783 12.1577 9.22019 11.76 9.22019C11.3624 9.22019 11.04 8.89783 11.04 8.50019V8.43948C11.04 8.04183 11.3624 7.71948 11.76 7.71948ZM11.7655 10.698C12.1631 10.698 12.4855 11.0203 12.4855 11.418V15.5456C12.4855 15.9432 12.1631 16.2656 11.7655 16.2656C11.3679 16.2656 11.0455 15.9432 11.0455 15.5456V11.418C11.0455 11.0203 11.3679 10.698 11.7655 10.698Z"
              className="fill-[#CDD0FE] group-hover:fill-[#0473FB]  transition-all duration-200"
            />
          </svg>
        ),
    },
  ]);

  return (
    <aside
      className={` ${
        sidebar ? "md:min-w-[247px]" : "md:w-[92px]"
      } bg-neutral-800 transition-all duration-300 ease-in-out items-center flex-col ${
        locale === "ar"
          ? "md:border-l-[1px] md:border-t-0"
          : " md:border-r-[1px] md:border-t-0"
      } border-input-border border-t-[1px] md:flex sidebar-mobile`}
    >
      <button
        style={{ direction: "ltr" }}
        className={`content-center mb-[40px] hidden md:flex dashed-border-dashboard-sidebar ${
          !sidebar ? "w-[72px]" : "w-[158px]"
        }  h-[40px] border-input-border hover:border-transparent hover:bg-accent-color transition-all duration-200 cursor-pointer mt-[24px] `}
        onClick={() => setSidebar(!sidebar)}
      >
        <Image
          src="/assets/images/dashboard/icons/sidebar/close_sidebar.svg"
          alt="arrow-icon"
          width={24}
          height={24}
          className={`${locale === "ar" && !sidebar && "rotate-[180deg]"} ${
            locale !== "ar" && sidebar && "rotate-[180deg]"
          }`}
        />
        {sidebar && (
          <span className={`text-white font-[500] text-sm mx-[8px]  `}>
            {t("dashboard:sidebar_close_menu_btn")}
          </span>
        )}
      </button>
      <SidebarDropDown t={t} sidebar={sidebar} />
      <ul className="w-full flex h-full md:h-auto md:block">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`
              flex items-center h-full md:h-[40px] ${
                pathname === item.url && "bg-sidebar-bg2"
              } 
            ${
              locale === "ar"
                ? sidebar
                  ? "p-0"
                  : "md:pr-[16px]"
                : sidebar
                ? "md:pl-[16px]"
                : "p-0"
            }
            w-full mb-[15px] relative`}
          >
            <Link
              href={item.url}
              className={`relative flex items-center flex-col md:flex-row justify-center  ${
                sidebar ? "md:justify-start" : "md:justify-center"
              }  group w-full h-full group`}
            >
              {item.icon}

              <span
                className={`px-[16px] mt-[8px] md:mt-0 text-sm md:text-md ${
                  pathname === item.url
                    ? "text-accent-color"
                    : "text-neutral-200 "
                } font-[500] transition-all duration-200 group-hover:text-accent-color ${
                  !sidebar &&
                  "md:scale-0 md:absolute  md:top-[50%] md:translate-y-[-50%]"
                }`}
              >
                {item.name}
              </span>
              {item.url === "/dashboard/notifications" && (
                <span
                  className={` ${
                    sidebar
                      ? "md:w-[24px] md:h-[24px]"
                      : "md:w-[18px] md:h-[18px]"
                  }  ${sidebar ? "md:top-[50%] " : "md:top-[27%]"} ${
                    locale === "ar"
                      ? sidebar
                        ? "md:left-[24px]"
                        : "md:left-[40px]"
                      : sidebar
                      ? "md:right-[24px]"
                      : "md:right-[40px]"
                  } absolute top-[17px] right-[45px] w-[18px] h-[18px]  translate-y-[-50%] bg-error-500 text-xs text-white font-[400] content-center rounded-[50%]`}
                >
                  8
                </span>
              )}
              {item.url === pathname && (
                <Lottie
                  className={`absolute ${
                    locale === "ar" ? "md:left-[-1.2px]" : "md:right-[-1.2px]"
                  }  w-fit translate-y-[-50%] rotate-[270deg] md:rotate-0 top-0 md:top-[50%] h-full`}
                  animationData={LineAnimation}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
      {sidebar && (
        <div className="w-[212px] hidden md:block overflow-hidden h-[177px] relative before:absolute before:content-[''] before:right-0 before:bottom-0 before:rounded-[50%] before:w-[115px] before:h-[100px] before:bg-[#127AFB] after:absolute after:content-[''] after:left-[-30px] after:top-[-30px] after:rounded-[50%] after:w-[115px] after:h-[100px] after:bg-[#127AFB] bg-accent-color  mt-[80px]  rounded-[24px]">
          <h6 className="text-neutral-100 font-[400] pt-[16px] px-[16px]  relative z-[1]">
            {t("dashboard:sidebar_discount_menu_title")} 20%
          </h6>
          <span className="text-neutral-100 relative z-[1]  px-[16px] text-sm font-[400] block mt-[8px] mb-[24px]">
            <span>{t("dashboard:sidebar_discount_menu_desc")}</span>
          </span>
          <Link
            href="/dashboard/plans"
            className="text-sm font-[500] relative z-[1]  content-center mx-auto rounded-[16px] text-neutral-800 bg-neutral-100 w-[168px] h-[40px]"
          >
            {t("dashboard:sidebar_discount_menu_btn")}
          </Link>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
