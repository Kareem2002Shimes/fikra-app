import Image from "next/image";

function ImageCard({ item }: any) {
  return (
    <Image
      src={`/images/dashboard/styleIdeas/1.jpg`}
      fill={true}
      alt="history-img"
      className="rounded-[16px] object-cover"
    />
  );
}

export default ImageCard;
