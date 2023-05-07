import Image from "next/image";
import { useState } from "react";
import Select from "./SelectOptions";
import data from "./Selects.json";

const spaceOptions = data.selects[0];
const groupedSpaceOptions = data.selects[0].groupedOptions;
const typeOfRoomOptions = data.selects[1];
const chooseStyleOptions = data.selects[2];
const modeOptions = data.selects[3];
const qualityOptions = data.selects[4];
const styleOptions = data.selects[5];
const resolutionOptions = data.selects[6];

function Controls() {
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [selectedTypeOfRoom, setSelectedTypeOfRoom] = useState(null);
  const [selectedChooseStyle, setSelectedChooseStyle] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedQuality, setSelectedQuality] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedResolution, setSelectedResolution] = useState(null);

  const reset = () => {
    setSelectedSpace(null);
    setSelectedTypeOfRoom(null);
    setSelectedChooseStyle(null);
    setSelectedMode(null);
    setSelectedQuality(null);
  };

  return (
    <div className="h-full px-[16px] pb-[16px] bg-neutral-800 overflow-y-scroll overflow-x-hidden">
      <div className="border-b-[1px] border-auth-border py-[16px]">
        <button
          type="button"
          onClick={reset}
          className="content-center rounded-[26px] w-[110px] h-[32px] border-[1px] border-neutral-600 items-center text-sm font-[400] text-neutral-400"
        >
          <Image
            src="/images/dashboard/icons/home/reset.svg"
            alt="reset-icon"
            width={16}
            height={16}
            className="mr-[4px]"
          />
          Start over
        </button>
      </div>
      <form className="mx-auto pt-[48px] w-[268px]">
        <Select
          instanceId={spaceOptions.id}
          options={groupedSpaceOptions}
          setSelectedSpace={setSelectedSpace}
          value={selectedSpace}
          placeholder={spaceOptions.placeholder}
        />

        <Select
          instanceId={typeOfRoomOptions.id}
          options={typeOfRoomOptions.options}
          setSelectedSpace={setSelectedTypeOfRoom}
          value={selectedTypeOfRoom}
          placeholder={typeOfRoomOptions.placeholder}
        />
        <Select
          instanceId={chooseStyleOptions.id}
          options={chooseStyleOptions.options}
          setSelectedSpace={setSelectedChooseStyle}
          value={selectedChooseStyle}
          placeholder={chooseStyleOptions.placeholder}
        />
        <Select
          instanceId={modeOptions.id}
          options={modeOptions.options}
          setSelectedSpace={setSelectedMode}
          value={selectedMode}
          placeholder={modeOptions.placeholder}
        />
        <button
          type="button"
          className="content-center flex-col w-full h-[152px] border-dashed border-[2px] border-accent-color rounded-[16px] mb-[40px]"
        >
          <Image
            src="/images/dashboard/icons/home/upload-icon.svg"
            alt="upload-icon"
            width={40}
            height={40}
            className="mb-[16px]"
          />
          <div className="text-sm text-neutral-50 mb-[8px]">
            Drop your file here or{" "}
            <span className="text-accent-color">Browse</span>
          </div>
          <span className="text-neutral-300 text-xs">
            The maximum file size is 5MB
          </span>
        </button>
        <Select
          instanceId={qualityOptions.id}
          options={qualityOptions.options}
          setSelectedSpace={setSelectedQuality}
          value={selectedQuality}
          placeholder={qualityOptions.placeholder}
        />
        <Select
          instanceId={styleOptions.id}
          options={styleOptions.options}
          setSelectedSpace={setSelectedStyle}
          value={selectedStyle}
          placeholder={styleOptions.placeholder}
        />
        <Select
          instanceId={resolutionOptions.id}
          options={resolutionOptions.options}
          setSelectedSpace={setSelectedResolution}
          value={selectedResolution}
          placeholder={resolutionOptions.placeholder}
        />
        <div className="border-t-[1px] border-auth-border pt-[16px]">
          <button
            type="submit"
            className="coloredBtn w-full h-[48px] rounded-[8px] text-white font-[500]"
          >
            Design a new idea
          </button>
        </div>
      </form>
    </div>
  );
}

export default Controls;
