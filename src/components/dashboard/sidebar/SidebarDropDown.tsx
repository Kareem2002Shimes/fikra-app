import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import accountImage from "/assets/images/dashboard/account-img.png";
function UserCircleIcon() {
  return (
    <Image
      src="/assets/images/dashboard/icons/sidebar/userIcon.svg"
      alt="q&a-icon"
      width={24}
      height={24}
    />
  );
}
function PlansIcon() {
  return (
    <Image
      src="/assets/images/dashboard/icons/sidebar/plans.svg"
      alt="plans-icon"
      width={24}
      height={24}
    />
  );
}
function SignOutIcon() {
  return (
    <Image
      src="/assets/images/dashboard/icons/sidebar/signOutIcon.svg"
      alt="signout-icon"
      width={24}
      height={24}
    />
  );
}

function SidebarDropDown({ sidebar, t }: any) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const session = useSession();
  const { locale } = useRouter();
  const closeMenu = () => setIsMenuOpen(false);
  const profileMenuItems = [
    {
      id: 1,
      label: t("dashboard:profile_popup_my_profile_btn"),
      icon: UserCircleIcon,
    },
    {
      id: 2,
      label: t("common:profile_popup_plans_btn"),
      icon: PlansIcon,
    },
    {
      id: 3,
      label: t("dashboard:profile_popup_signout_btn"),
      icon: SignOutIcon,
    },
  ];

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="right-start">
      <MenuHandler>
        <Button ripple={false} className={` px-[16px]  w-full  mb-[16px]`}>
          {sidebar && (
            <span
              className={`text-md ${
                locale === "ar" ? "text-right" : "text-left"
              }  mb-[8px] block text-neutral-200 font-[400]`}
            >
              {t("dashboard:sidebar_link_profile")}
            </span>
          )}
          <div className={`flex items-center  ${!sidebar && "justify-center"}`}>
            <Avatar
              variant="circular"
              alt="account-img"
              src={session.data?.user?.image as string}
              className="rounded-[50%] w-[40px] h-[40px]"
            />

            {session.data?.user && (
              <div
                className={`text-neutral-50 px-[16px] text-sm font-[500] ${
                  !sidebar && "scale-0 absolute top-[50%] translate-y-[-50%]"
                }`}
              >
                {session.data?.user.name &&
                session.data.user.name.length > 10 ? (
                  <span>
                    {locale === "ar" && "..."}
                    {session.data.user.name.substring(0, 9)}
                    {locale !== "ar" && "..."}
                  </span>
                ) : (
                  session.data.user.name
                )}
              </div>
            )}
            {sidebar && (
              <Image
                src="/assets/images/dashboard/icons/home/three-dots.svg"
                alt="three-dots-icon"
                width={24}
                height={24}
              />
            )}
          </div>
        </Button>
      </MenuHandler>
      <MenuList className="w-fit h-[176px] content-center flex-col bg-sidebar-bg2 border-[1px] border-input-border shadow-none outline-none rounded-[16px]">
        {profileMenuItems.map(({ label, icon, id }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={id}
              onClick={closeMenu}
              className={`flex items-center py-[4px] px-[16px] mb-[16px] first-of-type:mt-[16px] ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : " hover:bg-accent-color transition-all duration-200 ease-in "
              }`}
            >
              {React.createElement(icon, {
                className: "h-[24px] w-[24px] ",
              })}
              {id === 1 || id === 2 ? (
                <Link
                  href={
                    id === 1
                      ? "/dashboard/profile"
                      : id === 2
                      ? "/dashboard/plans-mangement"
                      : ""
                  }
                >
                  <Typography
                    as="span"
                    className={`text-mdfont-[500] ml-[8px] ${
                      isLastItem ? "text-error-500" : "text-neutral-200"
                    }`}
                  >
                    {label}
                  </Typography>
                </Link>
              ) : (
                <button
                  onClick={() => id === 3 && signOut({ callbackUrl: "/" })}
                >
                  <Typography
                    as="span"
                    className={`text-mdfont-[500] ml-[8px] ${
                      isLastItem ? "text-error-500" : "text-neutral-200"
                    }`}
                  >
                    {label}
                  </Typography>
                </button>
              )}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default SidebarDropDown;
