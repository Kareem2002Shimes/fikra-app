import { useEffect, useState } from "react";
import MainHeading from "./MainHeading";
import PlaceFilterBox from "./PlaceSlider/PlaceFilterBox";
import PlaceSlider from "./PlaceSlider/PlaceSlider";
import SpaceSlider from "@/src/data/SpaceSlider.json";
function ChoosePlace({ t }: any) {
  const [items, setItems] = useState(SpaceSlider[0].items);

  return (
    <section className="pt-[150px]">
      <div className="home-container content-center flex-col">
        <div className="w-[635px] max-w-full mx-auto text-center mb-[30px] ">
          <MainHeading title={t("home:choose_place_section_title")} />
        </div>
        <PlaceFilterBox t={t} setItems={setItems} />
      </div>
      <PlaceSlider items={items} />
    </section>
  );
}

export default ChoosePlace;
