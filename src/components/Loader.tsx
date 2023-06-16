import LoaderAnimation from "@/public/assets/animations/lodaing_Animation/lodaing_Animation.json";
import Lottie from "lottie-react";
import { BarLoader } from "react-spinners";

function Loader() {
  return (
    // <Lottie className="w-screen h-screen" animationData={LoaderAnimation} />
    <div className="h-screen content-center">
      <BarLoader color="#0473FB" />
    </div>
  );
}

export default Loader;
