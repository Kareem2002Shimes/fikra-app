import Layout from "@/src/components/dashboard/Layout";
import { useGetUsersQuery } from "@/src/redux/features/users/usersApiSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
function Profile() {
  const { data, status } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (status === "loading") {
    return <h2 className="text-white">Loading...</h2>;
  }

  return (
    <Layout>
      <div className="overflow-y-scroll">
        <div className="flex flex-col py-[40px] px-[30px] min-h-screen">
          <h5 className="text-white font-[400] mb-[24px]">Account Settings</h5>
          <button
            type="button"
            className="w-[96px] h-[96px] relative ml-[15px] mb-[24px]"
          >
            <Image
              src={data?.user?.image as string}
              alt="account-img"
              fill={true}
              className="rounded-[50%] "
            />
            <div className="w-[40px] h-[40px] bg-white absolute right-0 bottom-0 content-center rounded-[50%]">
              <Image
                src="/images/dashboard/icons/camera.svg"
                alt="camera-icon"
                width={24}
                height={24}
              />
            </div>
          </button>
          <span className="text-[#B7B7B7] font-[600] ml-[15px] text-lg mb-[4px]">
            My Account
          </span>
          <p className="text-md font-[500] ml-[15px] text-white mb-[55px]">
            {data?.user?.email}
          </p>
          <form>
            <label
              htmlFor="name"
              className="mb-[8px] text-white font-[500] block"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              defaultValue={data?.user?.name as string}
              className="update-user-inputs border-[1px] mb-[24px] px-[16px] text-neutral-300 font-[500] text-sm  border-input-border"
            />

            <label
              htmlFor="password"
              className="mb-[8px] text-white font-[500] block"
            >
              Password
            </label>
            <div className="flex relative mb-[24px]">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Type current password"
                className="update-user-inputs border-[1px]  pl-[16px] pr-[50px] text-neutral-300 font-[500] text-sm  border-input-border"
              />
              <Image
                className="absolute right-[20px] cursor-pointer top-[50%] translate-y-[-50%]"
                src="/images/auth/icons/eyes.svg"
                alt="eye-img"
                width={20}
                height={20}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <label
              htmlFor="confirm_password"
              className="mb-[8px] text-white font-[500] block"
            >
              Confirm Password
            </label>
            <div className="flex relative mb-[48px]">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm_password"
                placeholder="Type new password"
                className="update-user-inputs border-[1px]  pl-[16px] pr-[50px] text-neutral-300 font-[500] text-sm  border-input-border"
              />
              <Image
                className="absolute right-[20px] cursor-pointer top-[50%] translate-y-[-50%]"
                src="/images/auth/icons/eyes.svg"
                alt="eye-img"
                width={20}
                height={20}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>
            <button
              type="submit"
              className="w-[318px] h-[56px]  text-neutral-50 rounded-[12px] content-center bg-accent-color text-md font-[500]"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
