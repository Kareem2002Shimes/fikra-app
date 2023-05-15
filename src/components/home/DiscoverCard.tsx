import Image from "next/image";
interface DiscoverProps {
  title: string;
  desc: string;
  icon: string;
}
function DiscoverCard({ title, desc, icon }: DiscoverProps) {
  return (
    <div className="bg-neutral-800 rounded-[8px] h-[363px] text-center content-center flex-col">
      <div className="w-[120px] h-[120px] relative content-center mb-[30px]">
        <Image
          src={`/assets/images/home/discover/${icon}.svg`}
          alt="discover-icon"
          fill={true}
          className="object-contain mb-[30px]"
        />
      </div>
      <h5 className="text-neutral-50 font-[400] mb-[16px]">{title}</h5>
      <p className="font-[400] text-neutral-300 text-md w-[216px] max-w-full">
        {desc}
      </p>
    </div>
  );
}

export default DiscoverCard;
