import { useState } from "react";
import DiscoverCard from "./DiscoverCard";
import MainHeading from "./MainHeading";

function Discover() {
  const [content, setContent] = useState([
    {
      title: "Commercial space decorations",
      desc: "Restaurants, cafes, shops, and more",
      icon: "commercial-sapce-icon",
    },
    {
      title: "Residential space decorations",
      desc: "Bedrooms, living room, kitchen, and more",
      icon: "residential-space-icon",
    },
    {
      title: "Administrative spaces decorations",
      desc: "Meeting rooms, offices, reception, and more",
      icon: "administrative-space-icon",
    },
  ]);
  return (
    <section className="pt-[150px]">
      <div className="home-container">
        <div className="text-center mx-auto w-[485px] max-w-full">
          <MainHeading
            title="An ai tool that will change interior design for good"
            desc=" In less time and no effort, design any space you want 10x faster save
        your time, money and efforts and get more done"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mb-[40px]">
          {content.map((item) => (
            <DiscoverCard
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
        <button className="coloredBtn rounded-[8px] w-[208px] h-[56px] text-center text-lg text-white mx-auto block">
          Get Stared
        </button>
      </div>
    </section>
  );
}

export default Discover;
