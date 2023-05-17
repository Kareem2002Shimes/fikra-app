import Loading from "@/src/components/Loading";
import Layout from "@/src/components/dashboard/Layout";
import { useGetUsersQuery } from "@/src/redux/features/users/usersApiSlice";
import { useSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
function Profile() {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const { data, status } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (status === "loading") {
    return <Loading />;
  }

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
        <div>
          <h4 className="font-[500] text-white">{t("profile:account_info")}</h4>
          <div
            className={`bg-neutral-800 rounded-[16px] ${
              locale === "ar" ? "pr-[24px] pl-[32px]" : "pl-[24px] pr-[32px]"
            }`}
          ></div>
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
