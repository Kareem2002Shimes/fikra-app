import Image from "next/image";
import styleIdea from "@/src/assets/images/dashboard/styleIdeas/1.jpg";
function ImageCard() {
  return (
    <div className="relative container-animation w-full h-[325px] dashed-border mb-[35px] last-of-type:mb-0">
      <Image
        src={styleIdea}
        alt="img"
        fill={true}
        className="p-[15px] object-cover"
      />
    </div>
  );
}

export default ImageCard;
