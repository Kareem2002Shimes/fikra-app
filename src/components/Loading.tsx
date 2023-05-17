import LoadingAnimation from "@/public/assets/animations/lodaing_Animation/lodaing_Animation.json";
import Lottie from "lottie-react";

function Loading() {
  return (
    <Lottie className="w-screen h-screen" animationData={LoadingAnimation} />
  );
}

export default Loading;
