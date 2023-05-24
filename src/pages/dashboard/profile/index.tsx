import Layout from "@/src/components/dashboard/Layout";
import { useGetUsersQuery } from "@/src/redux/features/users/usersApiSlice";
import { useSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function Profile() {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("+201212160988");
  const { locale } = useRouter();
  const { data } = useSession();
  const [showForm, setShowForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const showData = [
    {
      label: t("profile:profile_form_name"),
      value: data?.user?.name,
    },
    {
      label: t("profile:profile_form_phone"),
      value: "077123456",
    },
    {
      label: t("profile:profile_form_country"),
      value: "مصر",
    },
    {
      label: t("profile:profile_form_password_label"),
      value: "*******",
    },
  ];

  return (
    <Layout t={t}>
      <div className="w-full">
        <div className="w-full h-[164px] relative">
          <Image
            src="/assets/images/dashboard/singleIdea4.jpg"
            alt="profile-landing-img"
            fill={true}
            className="object-cover"
          />
        </div>
        <div
          className={`${
            locale === "ar" ? "pr-[24px] pl-[32px]" : "pl-[24px] pr-[32px]"
          }  py-[24px]`}
        >
          <h4 className="font-[500] text-white mb-[8px]">
            {t("profile:account_info")}
          </h4>
          <div
            className={`bg-neutral-800  rounded-[16px] h-[96px] flex items-center justify-between`}
          >
            <div className="p-[16px] flex items-center">
              <button className="relative ">
                <Image
                  src={data?.user?.image as any}
                  alt="account-img"
                  width={64}
                  height={64}
                  className="rounded-[50%]"
                />
                <div className="absolute rounded-[50%] content-center bottom-0 right-0 w-[25px] h-[25px] bg-white">
                  <Image
                    src="/assets/images/dashboard/icons/profile/camera.svg"
                    alt="account-img"
                    width={15}
                    height={15}
                    className="rounded-[50%]"
                  />
                </div>
              </button>
              <div className="flex-col mx-[8px]">
                <span className="text-md text-neutral-100 font-[500] block ">
                  {t("profile:my_account")}
                </span>
                <span className="text-sm text-neutral-200 font-[500]">
                  {data?.user?.email}
                </span>
              </div>
            </div>
            <Link
              href="plans/management"
              className="flex mt-[16px] transition-all duration-200 hover:bg-accent-color mb-[40px] mx-[14px] items-center bg-neutral-700 w-fit px-[16px] content-center h-[40px] rounded-[8px]"
            >
              <Image
                src="/assets/images/dashboard/icons/sidebar/plans.svg"
                alt="plans-icon"
                width={24}
                height={24}
              />
              <span className="mx-[8px] text-sm font-[500] text-white">
                {t("common:profile_popup_plans_btn")}
              </span>
            </Link>
          </div>
          <div className="px-[16px] py-[16px] bg-neutral-800 rounded-[16px] mt-[8px]">
            <div className="flex items-center justify-between mb-[20px]">
              <h6 className="text-white font-[600]">
                {t("profile:private_info")}
              </h6>
              {!showForm && (
                <button
                  onClick={() => setShowForm(true)}
                  className="text-white font-[500] content-center border-[1px] border-input-border rounded-[12px] transition-all duration-200 hover:bg-accent-color hover:border-transparent px-[8px] w-fit h-[40px]"
                >
                  <span className="mx-[8px] text-xs">
                    {t("profile:modify_info_btn")}
                  </span>
                  <Image
                    src="/assets/images/dashboard/icons/profile/edit-icon.svg"
                    alt="account-img"
                    width={24}
                    height={24}
                    className="rounded-[50%]"
                  />
                </button>
              )}
            </div>
            {!showForm && (
              <div>
                {showData.map((item) => (
                  <div className="mb-[15px] last-of-type:mb-0 border-b-[1px] border-auth-border last-of-type:border-none pb-[8px]">
                    <span className="form-label">{item.label}</span>
                    <span className="text-neutral-200 bg-transparent tex-sm">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {showForm && (
              <form>
                <div className="mb-6 w-[552px]">
                  <label htmlFor="name" className="form-label">
                    {t("profile:profile_form_name")}
                  </label>
                  <div className="flex relative">
                    <input
                      type="text"
                      id="name"
                      className={`auth-box w-full tracking-[0.8px] bg-transparent rounded-[8px] text-sm  text-neutral-200 border border-input-border px-[15px]  focus:border-accent-color`}
                      defaultValue={data?.user?.name as any}
                    />
                  </div>
                </div>
                <div className="mb-6 w-[552px]">
                  <label htmlFor="name" className="form-label">
                    {t("profile:profile_form_country")}
                  </label>
                  <div className="flex relative">
                    <input
                      type="text"
                      id="name"
                      className={`auth-box w-full bg-transparent rounded-[8px] text-sm  text-neutral-200 border border-input-border px-[15px]  focus:border-accent-color`}
                      defaultValue="مصر"
                      // {...register("password", { required: true })}
                    />
                  </div>
                </div>
                <div className="mb-6 ">
                  <label htmlFor="name" className="form-label">
                    {t("profile:profile_form_phone")}
                  </label>
                  <div className=" h-[56px] content-center phone-box relative select-country w-[552px] max-w-full rounded-[8px] border border-input-border   focus:border-accent-color">
                    <PhoneInput
                      country={"eg"}
                      value={phone}
                      placeholder=""
                      inputProps={{
                        name: "phone",
                        required: true,
                      }}
                      onChange={(phone) => setPhone(phone as any)}
                      specialLabel=""
                      buttonStyle={{
                        width: "40px",
                        height: "48px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#1F2038",
                        border: "none",
                        borderRadius: "8px",
                        margin: "0 4px",
                      }}
                      inputStyle={{
                        background: "transparent",
                        width: "100%",
                        height: "48px",
                        border: "none",
                        color: "#ACB0DC",
                        fontSize: "14px",
                        fontWeight: "500",
                        lineHeight: "19px",
                        padding: "0 50px",
                        direction: "ltr",
                        textAlign: locale === "ar" ? "right" : "left",
                      }}
                      dropdownStyle={{
                        background: "#1C1C30",
                        color: "#F5F6FF",
                        direction: "ltr",
                        textAlign: locale === "ar" ? "right" : "left",
                      }}
                    />
                  </div>
                </div>
                <div className="mb-[12px]  w-[552px]">
                  <label htmlFor="password" className="form-label">
                    {t("profile:profile_form_password_label")}
                  </label>
                  <div className="flex relative w-full ">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className={`auth-box w-full bg-transparent rounded-[8px] text-sm  text-white border border-input-border px-[15px] focus:border-accent-color`}
                      placeholder={
                        t("profile:profile_form_current_password") as string
                      }
                    />
                    <Image
                      className={`absolute ${
                        locale === "ar" ? "left-[20px]" : "right-[20px]"
                      } cursor-pointer top-[50%] translate-y-[-50%]`}
                      src="/assets/images/auth/icons/eyes.svg"
                      alt="eye-img"
                      width={20}
                      height={20}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                </div>
                <div className=" w-[552px]">
                  <div className="flex relative w-full ">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className={`auth-box w-full bg-transparent rounded-[8px] text-sm  text-white border border-input-border px-[15px] focus:border-accent-color`}
                      placeholder={
                        t("profile:profile_form_new_password") as string
                      }
                    />
                    <Image
                      className={`absolute ${
                        locale === "ar" ? "left-[20px]" : "right-[20px]"
                      } cursor-pointer top-[50%] translate-y-[-50%]`}
                      src="/assets/images/auth/icons/eyes.svg"
                      alt="eye-img"
                      width={20}
                      height={20}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                </div>
                <div className="flex items-center mt-[50px]">
                  <button
                    type="submit"
                    className="w-[146px] h-[40px] text-neutral-50 text-md font-[500] rounded-[12px] bg-accent-color"
                  >
                    {t("profile:profile_form_save")}
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="w-[146px] mx-[15px] h-[40px] text-neutral-50 text-md font-[500] rounded-[12px] bg-[#1F1F36]"
                  >
                    {t("profile:profile_form_cancel")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "dashboard",
        "profile",
        "common",
      ])),
    },
  };
}
