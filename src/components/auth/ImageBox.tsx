import Image from "next/image";
function ImageBox() {
  return (
    <div
      className="pt-[90px] hidden md:block relative md:basis-[calc(100%-441px)] lg:basis-[calc(100%-503px)]"
      style={{
        backgroundImage:
          "linear-gradient(139.41deg, #3C79FE 13.26%, #7B1AD2 106.32%)",
      }}
    >
      <div className="pl-[40px] mb-[30px]">
        <h3 className="font-[700] text-neutral-50 mb-[15px]">
          Live your design experience <br /> With the help of artificial
          intelligence
        </h3>
        <p className="font-[400] w-[65%] text-md text-neutral-100">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum has been the industry's standard dummy
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
