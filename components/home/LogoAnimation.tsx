import Image from "next/image";
function LogoAnimation() {
  return (
    <Image
      src="/animations/Logo Animation/logo_Animation.gif"
      alt="logo-img"
      fill={true}
      className="object-contain"
    />
  );
}

export default LogoAnimation;
