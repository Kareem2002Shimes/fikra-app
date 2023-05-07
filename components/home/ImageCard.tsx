import Image from "next/image";
function ImageCard() {
  return (
    <div
      style={{ animation: "fadeTop 15s linear 2s infinite alternate" }}
      className="relative w-full h-[325px] dashed-border"
    >
      <Image
        src="/images/dashboard/styleIdeas/1.jpg"
        alt="img"
        fill={true}
        className="p-[15px] object-cover"
      />
    </div>
  );
}

export default ImageCard;
