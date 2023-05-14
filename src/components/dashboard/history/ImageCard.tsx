import Image from "next/image";
import styleIdeaImage from "@/src/assets/images/dashboard/styleIdeas/1.jpg";
function ImageCard({ item }: any) {
  return (
    <Image
      src={styleIdeaImage}
      fill={true}
      alt="history-img"
      className="rounded-[16px] object-cover"
    />
  );
}

export default ImageCard;
