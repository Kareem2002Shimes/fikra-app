import MainHeading from "./MainHeading";
import PlaceFilterBox from "./PlaceFilterBox";
import PlaceSlider from "./PlaceSlider";

function ChoosePlace() {
  return (
    <section className="pt-[150px]">
      <div className="home-container content-center flex-col">
        <div className="w-[635px] mx-auto text-center mb-[30px] ">
          <MainHeading title="Easier than you think, chose the identity of your place" />
        </div>
        <PlaceFilterBox />
      </div>
      <PlaceSlider />
    </section>
  );
}

export default ChoosePlace;
