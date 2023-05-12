import Image from "next/image";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import Select from "./SelectOptions";
import data from "./Selects.json";
import { toast } from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
import { TestContext } from "./TestContext";

const spaceOptions = data.selects[0];
const typeOfRoomOptions = data.selects[1];
const chooseStyleOptions = data.selects[2];
const modeOptions = data.selects[3];
const qualityOptions = data.selects[4];
const styleOptions = data.selects[5];
const resolutionOptions = data.selects[6];

let residentialSpacesRoom: any;
let commercialSpacesRoom: any;
let administrativeSpacesRoom: any;

let residentialSpacesOptionsValue: any;
let commercialSpacesOptionsValue: any;
let administrativeSpacesOptionsValue: any;

if (typeOfRoomOptions.groupedOptions && spaceOptions.groupedOptions) {
  // for rooms
  residentialSpacesRoom = typeOfRoomOptions.groupedOptions[0];
  commercialSpacesRoom = typeOfRoomOptions.groupedOptions[1];
  administrativeSpacesRoom = typeOfRoomOptions.groupedOptions[2];
  // for spaces
  residentialSpacesOptionsValue = spaceOptions.groupedOptions[0].options.map(
    (op) => op.value
  );
  commercialSpacesOptionsValue = spaceOptions.groupedOptions[1].options.map(
    (op) => op.value
  );
  administrativeSpacesOptionsValue = spaceOptions.groupedOptions[2].options.map(
    (op) => op.value
  );
}

function Controls() {
  const { setImage, selectedChooseStyle, setSelectedChooseStyle }: any =
    useContext(TestContext);

  const [selectedSpace, setSelectedSpace] = useState<any>(null);
  const [selectedTypeOfRoom, setSelectedTypeOfRoom] = useState<any>(null);
  const [selectedMode, setSelectedMode] = useState<any>(null);
  const [selectedQuality, setSelectedQuality] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedResolution, setSelectedResolution] = useState(null);
  const [typeOfRoom, setTypeOfRoom] = useState(residentialSpacesRoom.options);
  const [uploadedImage, setUploadedImage] = useState<any>(null);

  const reset = () => {
    setSelectedSpace(null);
    setSelectedTypeOfRoom(null);
    setSelectedChooseStyle(null);
    setSelectedMode(null);
    setSelectedQuality(null);
    setUploadedImage(null);
    setSelectedResolution(null);
    setSelectedStyle(null);
  };

  useEffect(() => {
    if (selectedSpace) {
      if (selectedSpace.label === residentialSpacesRoom.label) {
        setTypeOfRoom(residentialSpacesRoom.options);
      } else if (selectedSpace.label === commercialSpacesRoom.label) {
        setTypeOfRoom(commercialSpacesRoom.options);
      } else if (selectedSpace.label === administrativeSpacesRoom.label) {
        setTypeOfRoom(administrativeSpacesRoom.options);
      }
    }
    if (selectedTypeOfRoom && spaceOptions.options) {
      if (residentialSpacesOptionsValue.includes(selectedTypeOfRoom.value)) {
        setSelectedSpace(spaceOptions.options[0]);
      } else if (
        commercialSpacesOptionsValue.includes(selectedTypeOfRoom.value)
      ) {
        setSelectedSpace(spaceOptions.options[1]);
      } else if (
        administrativeSpacesOptionsValue.includes(selectedTypeOfRoom.value)
      ) {
        setSelectedSpace(spaceOptions.options[2]);
      }
    }
    if (uploadedImage && modeOptions.options) {
      setSelectedMode(modeOptions.options[0]);
    }
  }, [selectedSpace, selectedTypeOfRoom, uploadedImage]);
  const handleChange = (e: any) => {
    const image = e.target.files[0];
    if (
      image === "" ||
      image === undefined ||
      !image?.type.startsWith("image")
    ) {
      toast.error(`Not an image , please select image`);
      return;
    } else {
      setUploadedImage(image);
    }
  };
  const handleSumbit = (e: any) => {
    e.preventDefault();
    if (
      !selectedSpace ||
      !selectedTypeOfRoom ||
      !selectedChooseStyle ||
      !selectedMode ||
      !selectedResolution ||
      (selectedMode?.value !== "concept (no image needed)" && !uploadedImage) ||
      (selectedMode?.value === "concept (no image needed)" &&
        !selectedQuality) ||
      (selectedMode?.value === "concept (no image needed)" && !selectedStyle)
    ) {
      toast.error("Please fill in all fields!");
    } else {
      const payload = {
        space: selectedSpace,
        room: selectedTypeOfRoom,
        style: selectedChooseStyle,
        mode: selectedMode,
        resolution: selectedResolution,
        image:
          selectedMode?.value !== "concept (no image needed)" && uploadedImage,
        styleType:
          selectedMode?.value === "concept (no image needed)" && selectedStyle,
        quality:
          selectedMode?.value === "concept (no image needed)" &&
          selectedQuality,
      };
      // this payload will send to an API
      if (
        selectedMode?.value !== "concept (no image needed)" &&
        uploadedImage
      ) {
        const formData = new FormData();
        formData.append("file", uploadedImage);
        formData.append("upload_preset", "mddbfkqa");
        axios
          .post(
            "https://api.cloudinary.com/v1_1/dsuizfxen/image/upload",
            formData
          )
          .then((res) => {
            reset();
            setImage("/images/dashboard/test_result.jpg");
          })
          .catch((error) => console.log(error.message));
      } else {
        reset();
        setImage("/images/dashboard/test_result.jpg");
      }
    }
  };

  return (
    <div className=" min-w-[306px] px-[16px] pb-[16px] bg-neutral-800 overflow-y-scroll ">
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
      <form onSubmit={handleSumbit} className="mx-auto pt-[48px] w-[268px]">
        <Select
          instanceId={spaceOptions.id}
          options={spaceOptions.options}
          setSelected={setSelectedSpace}
          value={selectedSpace}
          placeholder={spaceOptions.placeholder}
        />

        <Select
          instanceId={typeOfRoomOptions.id}
          options={typeOfRoom}
          setSelected={setSelectedTypeOfRoom}
          value={selectedTypeOfRoom}
          placeholder={typeOfRoomOptions.placeholder}
        />
        <Select
          instanceId={chooseStyleOptions.id}
          options={chooseStyleOptions.options}
          setSelected={setSelectedChooseStyle}
          value={selectedChooseStyle}
          placeholder={chooseStyleOptions.placeholder}
        />
        <Select
          instanceId={modeOptions.id}
          options={modeOptions.options}
          setSelected={setSelectedMode}
          value={selectedMode}
          placeholder={modeOptions.placeholder}
        />
        {selectedMode?.value !== "concept (no image needed)" &&
          (uploadedImage ? (
            <div className="mb-[24px] relative">
              <button
                onClick={() => {
                  setUploadedImage(null);
                  setSelectedMode(null);
                }}
                className="w-[89px] h-[24px] group hover:bg-error-400 hover:text-white text-neutral-600 transition-all duration-100 ease-in absolute top-[8px] left-[8px] content-center bg-white rounded-[16px] font-[400] text-sm"
              >
                <span className="mx-[5px] group-hover:text-white text-neutral-600">
                  X
                </span>
                Delete
              </button>
              <Image
                src={URL.createObjectURL(uploadedImage)}
                alt="uploaded-img"
                width={268}
                height={152}
                className="rounded-[16px]"
              />
            </div>
          ) : (
            <div className="content-center relative flex-col w-full h-[152px] border-dashed border-[2px] border-accent-color rounded-[16px] mb-[40px]">
              <input
                style={{ filter: " alpha(opacity=0)" }}
                type="file"
                name="image"
                onChange={handleChange}
                className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
              />
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
            </div>
          ))}
        {selectedMode?.value === "concept (no image needed)" && (
          <>
            <Select
              instanceId={qualityOptions.id}
              options={qualityOptions.options}
              setSelected={setSelectedQuality}
              value={selectedQuality}
              placeholder={qualityOptions.placeholder}
            />
            <Select
              instanceId={styleOptions.id}
              options={styleOptions.options}
              setSelected={setSelectedStyle}
              value={selectedStyle}
              placeholder={styleOptions.placeholder}
            />
          </>
        )}

        <Select
          instanceId={resolutionOptions.id}
          options={resolutionOptions.options}
          setSelected={setSelectedResolution}
          value={selectedResolution}
          placeholder={resolutionOptions.placeholder}
        />
        <div className="border-t-[1px] border-auth-border pt-[16px]">
          <button
            type="submit"
            className="coloredBtn w-full  text-md  h-[48px] rounded-[8px] text-white font-[500]"
          >
            Design a new idea
          </button>
        </div>
      </form>
    </div>
  );
}

export default Controls;
