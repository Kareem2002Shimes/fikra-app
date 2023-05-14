import DiscoverCard from "./DiscoverCard";
import MainHeading from "./MainHeading";
import Link from "next/link";
import { useSession } from "next-auth/react";
import commercialIcon from "@/src/assets/images/home/discover/commercial-sapce-icon.svg";
import residentialIcon from "@/src/assets/images/home/discover/residential-space-icon.svg";
import administrativeIcon from "@/src/assets/images/home/discover/administrative-space-icon.svg";
function Discover({ t }: any) {
  const content = [
    {
      title: t("home:discover_section_grid_one_title"),
      desc: t("home:discover_section_grid_one_desc"),
      icon: commercialIcon,
    },
    {
      title: t("home:discover_section_grid_two_title"),
      desc: t("home:discover_section_grid_two_desc"),
      icon: residentialIcon,
    },
    {
      title: t("home:discover_section_grid_three_desc"),
      desc: t("home:discover_section_grid_three_desc"),
      icon: administrativeIcon,
    },
  ];
  const session = useSession();

  return (
    <section className="pt-[150px]">
      <div className="home-container">
        <div className="text-center mx-auto w-[485px] max-w-full">
          <MainHeading
            title={t("home:discover_section_title")}
            desc={t("home:discover_section_under_title")}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mb-[40px]">
          {content.map((item) => (
            <DiscoverCard
              key={item.title}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
        <Link
          href={session.data?.user ? "/dashboard" : "/auth/signup"}
          className="coloredBtn content-center rounded-[8px] w-[208px] h-[56px] text-center text-lg text-white mx-auto "
        >
          {t("home:discover_section_btn")}
        </Link>
      </div>
    </section>
  );
}

export default Discover;
