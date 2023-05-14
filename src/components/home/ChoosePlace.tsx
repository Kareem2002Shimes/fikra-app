import MainHeading from "./MainHeading";
import PlaceFilterBox from "./PlaceFilterBox";
import PlaceSlider from "./PlaceSlider/PlaceSlider";

function ChoosePlace({ t }: any) {
  return (
    <section className="pt-[150px]">
      <div className="home-container content-center flex-col">
        <div className="w-[635px] mx-auto text-center mb-[30px] ">
          <MainHeading title={t("home:choose_place_section_title")} />
        </div>
        <PlaceFilterBox t={t} />
      </div>
      <PlaceSlider />
    </section>
  );
}

export default ChoosePlace;
