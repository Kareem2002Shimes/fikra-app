import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import HomeAnimation from "../../../public/animations/icons_Animation/home.json";
import HistoryAnimation from "../../../public/animations/icons_Animation/histo.json";
import PlansAnimation from "../../../public/animations/icons_Animation/fav.json";
import LineAnimation from "../../../public/animations/icons_Animation/blue line.json";
import InfoAnimation from "../../../public/animations/icons_Animation/info.json";
import Lottie from "lottie-react";
import useSidebar from "@/hooks/useSidebar";
import SidebarDropDown from "./SidebarDropDown";

function Sidebar() {
  const { pathname } = useRouter();
  const [sidebar, setSidebar] = useSidebar("sidebar", true);
  const [menuItems, setMenuItems] = useState([
    {
      name: "Home",
      url: "/dashboard",
      icon:
        pathname === "/dashboard" ? (
          <Lottie className="w-full h-full" animationData={HomeAnimation} />
        ) : (
          <Image
            src="/images/dashboard/icons/sidebar/home.svg"
            alt="home-icon"
            width={24}
            height={24}
          />
        ),
    },
    {
      name: "History",
      url: "/dashboard/history",
      icon:
        pathname === "/dashboard/history" ? (
          <Lottie className="w-full h-full" animationData={HistoryAnimation} />
        ) : (
          <Image
            src="/images/dashboard/icons/sidebar/history.svg"
            alt="history-icon"
            width={24}
            height={24}
          />
        ),
    },
    {
      name: "Plans",
      url: "/dashboard/plans",
      icon:
        pathname === "/dashboard/plans" ? (
          <Lottie className="w-full h-full" animationData={PlansAnimation} />
        ) : (
          <Image
            src="/images/dashboard/icons/sidebar/plans.svg"
            alt="plans-icon"
            width={24}
            height={24}
          />
        ),
    },
    {
      name: "Q&A",
      url: "/dashboard/q&a",
      icon:
        pathname === "/dashboard/q&a" ? (
          <Lottie className="w-full h-full" animationData={InfoAnimation} />
        ) : (
          <Image
            src="/images/dashboard/icons/sidebar/info.svg"
            alt="info-icon"
            width={24}
            height={24}
          />
        ),
    },
  ]);

  return (
    <div
      className={`${
        sidebar ? "w-[216px]" : "w-[92px]"
      } h-full bg-neutral-800 transition-all duration-300 ease-in-out items-center flex-col border-r-[1px] border-input-border hidden md:flex`}
    >
      <div
        className="content-center mb-[40px] cursor-pointer mt-[24px] border-[1px] border-dashed rounded-[50%] border-accent-color w-[32px] h-[32px]"
        onClick={() => setSidebar(!sidebar)}
      >
        <Image
          src="/images/dashboard/icons/sidebar/leftArrow-icon.svg"
          alt="arrow-icon"
          width={7.4}
          height={12}
        />
      </div>

      <aside className={sidebar ? "w-[216px]" : "w-[92px]"}>
        <SidebarDropDown sidebar={sidebar} />
        {/* <Link
          href="/dashboard/profile"
          className={`flex items-center mb-[15px] ${
            sidebar ? "pl-[24px]" : "justify-center pl-[0]"
          }`}
        >
          <div className="relative w-[40px] h-[40px] rounded-[50%]">
            <Image
              src="/images/dashboard/account-img.png"
              alt="account-img"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
          <span
            className={`text-md font-[500] text-neutral-100 mx-[8px] ${
              !sidebar && "scale-0 absolute top-[50%] translate-x-[-50%]"
            }`}
          >
            Ahmed
          </span>
        </Link> */}
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`${
                sidebar ? "pl-[24px]" : "justify-center pl-[0]"
              } flex items-center h-[40px] ${
                pathname === item.url && "bg-sidebar-bg2"
              } w-full mb-[15px]`}
            >
              <Link
                href={item.url}
                className={`relative flex items-center ${
                  !sidebar && "justify-center"
                }  group w-full h-full`}
              >
                {item.icon}

                <span
                  className={`pl-[16px] text-md ${
                    pathname === item.url
                      ? "text-accent-color"
                      : "text-neutral-200 "
                  } font-[500] duration-300 group-hover:text-accent-color ${
                    !sidebar && "scale-0 absolute top-[50%] translate-y-[-50%]"
                  }`}
                >
                  {item.name}
                </span>
                {item.url === pathname && (
                  <Lottie
                    className={`absolute ${
                      !sidebar ? "right-[-99.5%]" : "right-[-73.5%]"
                    } w-full  translate-y-[-50%] top-[50%] h-full`}
                    animationData={LineAnimation}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
        {sidebar && (
          <div className="w-[184px] h-[152px] bg-accent-color mx-auto mt-[80px] rounded-[24px]">
            <h5 className="text-neutral-100 font-[400] pt-[16px] pl-[23px]">
              save 20%
            </h5>
            <span className="text-neutral-100 text-md font-[400] text-center block mt-[8px] mb-[24px]">
              First 200 Joined
            </span>
            <Link
              href="/dashboard/plans"
              className="text-md font-[500] content-center mx-auto rounded-[16px] text-neutral-800 bg-neutral-100 w-[168px] h-[40px]"
            >
              Upgrade Now
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}

export default Sidebar;
