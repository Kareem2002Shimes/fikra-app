import Image from "next/image";
import { useRouter } from "next/router";
function NeedCard({
  title,
  id,
  desc,
  text,
}: {
  id: number;
  title: string;
  desc: string;
  text: string;
}) {
  const { locale } = useRouter();
  return (
    <div
      style={{
        background:
          "linear-gradient(#171727, #171727) padding-box, linear-gradient(139.41deg, #3c79fe 13.26%, #7b1ad2 106.32%) border-box",
        borderRadius: " 16px",
        border: "2px solid transparent",
      }}
      className={`rounded-[16px] p-[24px] text-center ${
        locale === "ar" ? "text-right" : "text-left"
      }`}
    >
      <span className="text-sm text-white font-[500] mb-[15px] block">
        {text} {id}
      </span>
      <Image
        src="/assets/images/home/doc-icon.svg"
        alt="doc-icon"
        width={48}
        height={48}
        className="mb-[15px] mx-auto sm:mx-0"
      />
      <h6 className="text-neutral-100 font-[600] mb-[8px]">{title}</h6>
      <p className="text-neutral-300 font-[500]">{desc}</p>
    </div>
  );
}

export default NeedCard;
