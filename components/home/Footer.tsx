import { useState } from "react";
import FooterNav from "./Navbar";
import Image from "next/image";
function Footer() {
  const [links, setLinks] = useState(["contact us", "home"]);
  const [socialLinks, setSocialLinks] = useState([
    { icon: "facebook-icon", url: "facebook" },
    { icon: "insta-icon", url: "insta" },
    { icon: "twitter-icon", url: "twitter" },
    { icon: "youtube-icon", url: "youtube" },
  ]);
  return (
    <section className="bg-sidebar-bg2 h-[219px] relative">
      <div className="home-container ">
        <div className="flex justify-between items-center">
          <div className="pt-[24px] ">
            <FooterNav links={links} />
            <p className="text-neutral-200 font-[400] mt-[30px] mb-[30px]">
              Follow us on social media
            </p>
            <FooterNav socialLinks={socialLinks} />
          </div>
          <div className="flex items-center gap-[16px] h-[64px]">
            <p className="text-neutral-50 font-[400] text-lg w-[450px] max-w-full">
              An artificial intelligence tool that provides you with a
              high-quality and accurate interior design
            </p>
            <Image
              src="/images/logo.svg"
              alt="logo-img"
              width={56}
              height={56}
            />
          </div>
        </div>
        <p className="font-[400] text-neutral-200 text-center absolute left-0 w-full  bottom-[24px]">
          All rights reserved to Fikra Company &copy; 2023
        </p>
      </div>
    </section>
  );
}

export default Footer;
