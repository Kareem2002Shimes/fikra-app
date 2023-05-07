import { useState } from "react";
import ImageCard from "./ImageCard";

function Landing() {
  const [state, setState] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12,
  ]);
  return (
    <section className="overflow-hidden relative h-[calc(100vh-65px)] w-full ">
      <div
        style={{
          background:
            "linear-gradient(24.51deg, #171727 19.68%, rgba(23, 23, 39, 0.04) 104.32%, rgba(27, 32, 30, 0) 122.97%)",
        }}
        className="absolute top-0 left-0 w-full h-full z-10"
      ></div>
      <div className="absolute top-0 left-0 xl:left-[-72px] w-full xl:w-[calc(100vw-72px)] h-full content-center xl:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-[35px] h-fit rotate-[8deg]">
          {state.map((s) => (
            <ImageCard />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Landing;
