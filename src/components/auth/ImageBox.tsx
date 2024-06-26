import Image from "next/image";
function ImageBox({ t }: any) {
  return (
    <div
      className="pt-[90px] hidden md:block relative w-full "
      style={{
        backgroundImage:
          "linear-gradient(139.41deg, #3C79FE 13.26%, #7B1AD2 106.32%)",
      }}
    >
      <div className="px-[40px] mb-[30px]">
        <h3 className="font-[700] text-neutral-50 mb-[15px]">
          {t("common:start_design_auth_title")}
        </h3>
        <p className="font-[400] w-[65%] text-md text-neutral-100">
          {t("common:start_design_auth_desc")}
        </p>
      </div>

      <div
        className={`absolute bottom-0 xl:bottom-[-20%] mr-[30px] left-0 pr-[10px] pt-[10px] after:content-[""] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(255,255,255,0.16)] after:backdrop-blur-[29px] after:rounded-tr-[24px] `}
      >
        <Image
          src="/assets/images/auth/img.jpg"
          alt="auth-img"
          width={860}
          height={530}
          className="rounded-tr-[16px] relative z-20"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default ImageBox;
