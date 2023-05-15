import Image from "next/image";
import { useEffect, useState } from "react";
import Select from "./SelectOptions";
import data from "@/src/data/Selects.json";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/src/redux/app/store";
import {
  setActiveIdea,
  setReceivedImage,
  setSelectedSpace,
} from "@/src/redux/features/settings/settingsSlice";
import { setSelectedTypeOfRoom } from "@/src/redux/features/settings/settingsSlice";
import { setSelectedChooseStyle } from "@/src/redux/features/settings/settingsSlice";
import { setSelectedMode } from "@/src/redux/features/settings/settingsSlice";
import { setSelectedQuality } from "@/src/redux/features/settings/settingsSlice";
import { setUploadedImage } from "@/src/redux/features/settings/settingsSlice";
import { setSelectedResolution } from "@/src/redux/features/settings/settingsSlice";
import { setSelectedStyle } from "@/src/redux/features/settings/settingsSlice";
import InfoModal from "../InfoModal";
import { handleImageCompression } from "@/src/services/uploadCompression";

const spaceOptions = data.selects[0];
const typeOfRoomOptions = data.selects[1];
const chooseStyleOptions = data.selects[2];
const modeOptions = data.selects[3];
const qualityOptions = data.selects[4];
const styleOptions = data.selects[5];
const resolutionOptions = data.selects[6];

const allRooms = typeOfRoomOptions.groupedOptions?.map(
  (item: any) => item.options
);
const optionsRoomOne = allRooms && allRooms[0];
const optionsRoomTwo = allRooms && allRooms[1];
const optionsRoomThree = allRooms && allRooms[0];

let allRoomsOptions = [
  ...optionsRoomOne,
  ...optionsRoomTwo,
  ...optionsRoomThree,
];

function Controls() {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const [typeOfRoom, setTypeOfRoom] = useState(allRoomsOptions);
  const [imageUrl, setImageUrl] = useState("");
  const reset = () => {
    dispatch(setSelectedSpace(null));
    dispatch(setSelectedTypeOfRoom(null));
    dispatch(setSelectedChooseStyle(null));
    dispatch(setSelectedMode(null));
    dispatch(setSelectedQuality(null));
    dispatch(setSelectedResolution(null));
    dispatch(setSelectedStyle(null));
    dispatch(setUploadedImage(null));
    setImageUrl("");
    setTypeOfRoom(allRoomsOptions);
  };

  useEffect(() => {
    // show rooms according to space
    if (settings.selectedSpace && typeOfRoomOptions.groupedOptions) {
      if (
        settings.selectedSpace.label ===
        typeOfRoomOptions.groupedOptions[0].label
      ) {
        setTypeOfRoom(typeOfRoomOptions.groupedOptions[0].options);
      } else if (
        settings.selectedSpace.label ===
        typeOfRoomOptions.groupedOptions[1].label
      ) {
        setTypeOfRoom(typeOfRoomOptions.groupedOptions[1].options);
      } else if (
        settings.selectedSpace.label ===
        typeOfRoomOptions.groupedOptions[2].label
      ) {
        setTypeOfRoom(typeOfRoomOptions.groupedOptions[2].options);
      }
    }
    // if room selected space selected also

    if (settings.selectedTypeOfRoom && !settings.selectedSpace) {
      const lables = spaceOptions.options?.map((op) => op.label);
      if (lables?.includes(settings.selectedTypeOfRoom.ref as string)) {
        dispatch(
          setSelectedSpace(
            spaceOptions.options?.find(
              (element) => element.label === settings.selectedTypeOfRoom?.ref
            )
          )
        );
      }
    }
    // if room was selected and then change space
    if (
      settings.selectedSpace?.label !== settings.selectedTypeOfRoom?.ref &&
      settings.selectedTypeOfRoom &&
      settings.selectedSpace
    ) {
      dispatch(setSelectedTypeOfRoom(null));
    }

    // if image uploaded mode option will be selected
    if (settings.uploadedImage && modeOptions.options) {
      dispatch(setSelectedMode(modeOptions.options[0]));
    }

    if (settings.selectedChooseStyle) {
      dispatch(setActiveIdea(settings.selectedChooseStyle.value));
    }
    if (!settings.selectedChooseStyle) {
      dispatch(setActiveIdea(null));
    }
  }, [
    settings.selectedSpace,
    settings.selectedTypeOfRoom,
    settings.uploadedImage,
    settings.selectedChooseStyle,
    dispatch,
  ]);

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
      dispatch(setUploadedImage(image)); // to send to backend api with compression
      setImageUrl(URL.createObjectURL(image)); // only to show image when select it
    }
  };
  const handleSumbit = (e: any) => {
    e.preventDefault();
    if (
      !settings.selectedSpace ||
      !settings.selectedTypeOfRoom ||
      !settings.selectedChooseStyle ||
      !settings.selectedMode ||
      !settings.selectedResolution ||
      (settings.selectedMode?.value !== "concept (no image needed)" &&
        !settings.uploadedImage) ||
      (settings.selectedMode?.value === "concept (no image needed)" &&
        !settings.selectedQuality) ||
      (settings.selectedMode?.value === "concept (no image needed)" &&
        !settings.selectedStyle)
    ) {
      toast.error("Please fill in all fields!");
    } else {
      const payload = {
        space: settings.selectedSpace,
        room: settings.selectedTypeOfRoom,
        style: settings.selectedChooseStyle,
        mode: settings.selectedMode,
        resolution: settings.selectedResolution,
        image:
          settings.selectedMode?.value !== "concept (no image needed)" &&
          settings.uploadedImage,
        styleType:
          settings.selectedMode?.value === "concept (no image needed)" &&
          settings.selectedStyle,
        quality:
          settings.selectedMode?.value === "concept (no image needed)" &&
          settings.selectedQuality,
      };
      // this payload will send to an API
      if (
        settings.selectedMode?.value !== "concept (no image needed)" &&
        settings.uploadedImage
      ) {
        // call handleImageCompression to compress image and send to backend api
        // handleImageCompression(settings.uploadedImage);
        const formData = new FormData();
        formData.append("file", settings.uploadedImage);
        formData.append("upload_preset", "mddbfkqa");
        axios
          .post(
            "https://api.cloudinary.com/v1_1/dsuizfxen/image/upload",
            formData
          )
          .then((res) => {
            reset();
            toast.success("Designed Successfully");
            dispatch(
              setReceivedImage("/assets/images/dashboard/test_result.jpg")
            );
          })
          .catch((error) => toast.error(error.message));
      } else {
        reset();
        dispatch(setReceivedImage("/assets/images/dashboard/test_result.jpg"));
        toast.success("Designed Successfully");
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
            src="/assets/images/dashboard/icons/home/reset.svg"
            alt="reset-icon"
            width={16}
            height={16}
            className="mr-[4px]"
          />
          Start over
        </button>
      </div>
      <form onSubmit={handleSumbit} className="mx-auto pt-[48px] w-[268px] ">
        <div className="relative ">
          <div className="absolute top-[-48px] transition-all duration-200 ease-in-out invisible  ">
            <InfoModal title="الفراغ هو نوع المساحة التي تود تصميمها سواء كانت سكنية او تجارية او ادارية" />
          </div>
          <Select
            instanceId={spaceOptions.id}
            options={spaceOptions.options}
            setSelected={setSelectedSpace}
            dispatch={dispatch}
            value={settings.selectedSpace}
            placeholder={spaceOptions.placeholder}
          />
        </div>

        <div className="relative ">
          <div className="absolute top-[-48px] transition-all duration-200 ease-in-out invisible  ">
            <InfoModal title="اختار نوع غرفتك" />
          </div>
          <Select
            instanceId={typeOfRoomOptions.id}
            options={typeOfRoom}
            setSelected={setSelectedTypeOfRoom}
            dispatch={dispatch}
            value={settings.selectedTypeOfRoom}
            placeholder={typeOfRoomOptions.placeholder}
          />
        </div>
        <Select
          instanceId={chooseStyleOptions.id}
          options={chooseStyleOptions.options}
          setSelected={setSelectedChooseStyle}
          dispatch={dispatch}
          value={settings.selectedChooseStyle}
          placeholder={chooseStyleOptions.placeholder}
        />
        <Select
          instanceId={modeOptions.id}
          options={modeOptions.options}
          setSelected={setSelectedMode}
          dispatch={dispatch}
          value={settings.selectedMode}
          placeholder={modeOptions.placeholder}
        />
        {settings.selectedMode?.value !== "concept (no image needed)" &&
          (settings.uploadedImage && imageUrl ? (
            <div className="mb-[24px] relative">
              <button
                onClick={() => {
                  setImageUrl("");
                  dispatch(setUploadedImage(null));
                  dispatch(setSelectedMode(null));
                }}
                className="w-[89px] h-[24px] group hover:bg-error-400 hover:text-white text-neutral-600 transition-all duration-100 ease-in absolute top-[8px] left-[8px] content-center bg-white rounded-[16px] font-[400] text-sm"
              >
                <span className="mx-[5px] group-hover:text-white text-neutral-600">
                  X
                </span>
                Delete
              </button>
              <Image
                src={imageUrl}
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
                accept="image/*"
                onChange={handleChange}
                className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
              />
              <Image
                src="/assets/images/dashboard/icons/home/upload-icon.svg"
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
        {settings.selectedMode?.value === "concept (no image needed)" && (
          <>
            <div className="relative ">
              <div className="absolute top-[-48px] transition-all duration-200 ease-in-out invisible  ">
                <InfoModal title="اختار الجودة" />
              </div>
              <Select
                instanceId={qualityOptions.id}
                options={qualityOptions.options}
                setSelected={setSelectedQuality}
                dispatch={dispatch}
                value={settings.selectedQuality}
                placeholder={qualityOptions.placeholder}
              />
            </div>
            <div className="relative ">
              <div className="absolute top-[-48px] transition-all duration-200 ease-in-out invisible  ">
                <InfoModal title="اختار استايلك المفضل" />
              </div>
              <Select
                instanceId={styleOptions.id}
                options={styleOptions.options}
                setSelected={setSelectedStyle}
                dispatch={dispatch}
                value={settings.selectedStyle}
                placeholder={styleOptions.placeholder}
              />
            </div>
          </>
        )}

        <div className="relative  ">
          <div className="absolute top-[-48px] transition-all duration-200 ease-in-out invisible ">
            <InfoModal title="اختار نوع العرض" />
          </div>
          <Select
            instanceId={resolutionOptions.id}
            options={resolutionOptions.options}
            setSelected={setSelectedResolution}
            dispatch={dispatch}
            value={settings.selectedResolution}
            placeholder={resolutionOptions.placeholder}
          />
        </div>

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
