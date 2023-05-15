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
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Plans Management",
    icon: PlansIcon,
  },
  {
    label: "Sign Out",
    icon: SignOutIcon,
  },
];
function SidebarDropDown({ sidebar }: any) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const session = useSession();
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="right-start">
      <MenuHandler>
        <Button
          ripple={false}
          className="content-center justify-start px-[16px] w-full  mb-[16px]"
        >
          <Avatar
            variant="circular"
            alt="account-img"
            src={session.data?.user?.image as string}
            className="rounded-[50%] w-[40px] h-[40px] mx-auto"
          />
          {session.data?.user && (
            <Typography
              className={`text-neutral-50 pl-[16px] text-md font-[500] ${
                !sidebar && "scale-0 absolute top-[50%] translate-y-[-50%]"
              }`}
            >
              {session.data?.user?.name}
            </Typography>
          )}
        </Button>
      </MenuHandler>
      <MenuList className="w-fit h-[176px] content-center flex-col bg-sidebar-bg2 border-[1px] border-input-border shadow-none outline-none rounded-[16px]">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
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
              <Link
                href={
                  label === "My Profile"
                    ? "/dashboard/profile"
                    : label === "Plans Management"
                    ? "/dashboard/plans-management"
                    : ""
                }
                onClick={() =>
                  label === "Sign Out" && signOut({ callbackUrl: "/" })
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
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default SidebarDropDown;
