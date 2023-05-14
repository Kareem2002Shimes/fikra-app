import Image from "next/image";
import logoAnimation from "@/src/assets/animations/Logo Animation/logo_Animation.gif";
function LogoAnimation() {
  return (
    <Image
      src={logoAnimation}
      alt="logo-img"
      fill={true}
      className="object-contain"
    />
  );
}

export default LogoAnimation;
