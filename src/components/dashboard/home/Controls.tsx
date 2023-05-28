import Image from "next/image";
import { useEffect, useState } from "react";
import Select from "./SelectOptions";
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
import { useRouter } from "next/router";

function Controls({ t, setShowControls }: any) {
  const data = {
    selects: [
      {
        id: 1,
        placeholder: t("dashboard:select_space_placeholder"),
        options: [
          {
            value: "residential spaces",
            label: t("dashboard:select_space_option_one_label"),
          },
          {
            value: "commercial spaces",
            label: t("dashboard:select_space_option_two_label"),
          },
          {
            value: "administrative spaces",
            label: t("dashboard:select_space_option_three_label"),
          },
        ],
      },
      {
        id: 2,
        placeholder: t("dashboard:select_room_placeholder"),
        groupedOptions: [
          {
            value: "residential spaces",
            options: [
              {
                value: "balcony",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_one_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "bathroom",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_two_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "bedroom",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_three_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "closet",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_four_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "corridor",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_five_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "dining room",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_six_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "dressing Room",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_seven_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "external laundries",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_eight_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "family cinema room",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_nine_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "gaming room",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_ten_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "gym room",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_eleven_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "hallway",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_twelve_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "home office",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_thirteen_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "kitchen",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_fourteen_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "laundry room",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_fifteen_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "living room",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_sixteen_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "master Bedroom",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_seventeen_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "men's majlis",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_eighteen_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "stairway",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_nineteen_label"
                ),
                ref: "residential spaces",
              },
              {
                value: "women's majlis",
                label: t(
                  "dashboard:select_room_group_options_label_space_option_twenty_label"
                ),
                ref: "residential spaces",
              },
            ],
          },
          {
            value: "commercial spaces",
            options: [
              {
                value: "clothing store",
                label: t(
                  "dashboard:select_room_group_options_label_commercial_option_one_label"
                ),
                ref: "commercial spaces",
              },
              {
                value: "coffee shop",
                label: t(
                  "dashboard:select_room_group_options_label_commercial_option_two_label"
                ),
                ref: "commercial spaces",
              },
              {
                value: "hotel bathroom",
                label: t(
                  "dashboard:select_room_group_options_label_commercial_option_three_label"
                ),
                ref: "commercial spaces",
              },
              {
                value: "hotel lobby",
                label: t(
                  "dashboard:select_room_group_options_label_commercial_option_four_label"
                ),
                ref: "commercial spaces",
              },
              {
                value: "hotel room",
                label: t(
                  "dashboard:select_room_group_options_label_commercial_option_five_label"
                ),
                ref: "commercial spaces",
              },
              {
                value: "men's barber shop",
                label: t(
                  "dashboard:select_room_group_options_label_commercial_option_six_label"
                ),
                ref: "commercial spaces",
              },
              {
                value: "restaurant",
                label: t(
                  "dashboard:select_room_group_options_label_commercial_option_seven_label"
                ),
                ref: "commercial spaces",
              },
              {
                value: "supermarket",
                label: t(
                  "dashboard:select_room_group_options_label_commercial_option_eight_label"
                ),
                ref: "commercial spaces",
              },
              {
                value: "wedding Hall",
                label: t(
                  "dashboard:select_room_group_options_label_commercial_option_nine_label"
                ),
                ref: "commercial spaces",
              },
              {
                value: "women's beauty salon",
                label: t(
                  "dashboard:select_room_group_options_label_commercial_option_ten_label"
                ),
                ref: "commercial spaces",
              },
            ],
          },
          {
            value: "administrative spaces",

            options: [
              {
                value: "archive room",
                label: t(
                  "dashboard:select_room_group_options_label_administrative_option_one_label"
                ),
                ref: "administrative spaces",
              },
              {
                value: "director Office",
                label: t(
                  "dashboard:select_room_group_options_label_administrative_option_two_label"
                ),
                ref: "administrative spaces",
              },
              {
                value: "entertainment room",
                label: t(
                  "dashboard:select_room_group_options_label_administrative_option_three_label"
                ),
                ref: "administrative spaces",
              },
              {
                value: "meeting room",
                label: t(
                  "dashboard:select_room_group_options_label_administrative_option_four_label"
                ),
                ref: "administrative spaces",
              },
              {
                value: "office",
                label: t(
                  "dashboard:select_room_group_options_label_administrative_option_five_label"
                ),
                ref: "administrative spaces",
              },
              {
                value: "reception",
                label: t(
                  "dashboard:select_room_group_options_label_administrative_option_six_label"
                ),
                ref: "administrative spaces",
              },
              {
                value: "secretarial office",
                label: t(
                  "dashboard:select_room_group_options_label_administrative_option_seven_label"
                ),
                ref: "administrative spaces",
              },
              {
                value: "servers room",
                label: t(
                  "dashboard:select_room_group_options_label_administrative_option_eight_label"
                ),
                ref: "administrative spaces",
              },
              {
                value: "staff dining room",
                label: t(
                  "dashboard:select_room_group_options_label_administrative_option_nine_label"
                ),
                ref: "administrative spaces",
              },
              {
                value: "workshop room",
                label: t(
                  "dashboard:select_room_group_options_label_administrative_option_ten_label"
                ),
                ref: "administrative spaces",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        placeholder: t("dashboard:select_style_idea_placeholder"),
        options: [
          {
            value: "art Deco",
            label: t("dashboard:select_style_idea_option_one_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "art nouveau",
            label: t("dashboard:select_style_idea_option_two_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "asian Zen",
            label: t("dashboard:select_style_idea_option_three_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "baroque",
            label: t("dashboard:select_style_idea_option_four_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "biophilic",
            label: t("dashboard:select_style_idea_option_five_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "bohemian",
            label: t("dashboard:select_style_idea_option_six_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "coastal",
            label: t("dashboard:select_style_idea_option_seven_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "contemporary",
            label: t("dashboard:select_style_idea_option_eight_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "cottagecore",
            label: t("dashboard:select_style_idea_option_nine_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "cyberpunk",
            label: t("dashboard:select_style_idea_option_ten_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "easter",
            label: t("dashboard:select_style_idea_option_eleven_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "eclectic",
            label: t("dashboard:select_style_idea_option_twelve_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "french Country",
            label: t("dashboard:select_style_idea_option_thirteen_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "hollywood Glam",
            label: t("dashboard:select_style_idea_option_fourteen_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "industrial",
            label: t("dashboard:select_style_idea_option_fifteen_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "interior AI",
            label: t("dashboard:select_style_idea_option_sixteen_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "japanese",
            label: t("dashboard:select_style_idea_option_seventeen_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "maximalist",
            label: t("dashboard:select_style_idea_option_eighteen_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "mediterranean",
            label: t("dashboard:select_style_idea_option_nineteen_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "mid Century Modern",
            label: t("dashboard:select_style_idea_option_twenty_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "minimalist",
            label: t("dashboard:select_style_idea_option_twentyOne_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "modern Farmhouse",
            label: t("dashboard:select_style_idea_option_twentyTwo_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "modern",
            label: t("dashboard:select_style_idea_option_twentyThree_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "rustic",
            label: t("dashboard:select_style_idea_option_twentyFour_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "scandinavian",
            label: t("dashboard:select_style_idea_option_twentyFive_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "shabby Chic",
            label: t("dashboard:select_style_idea_option_twentySix_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "sketch",
            label: t("dashboard:select_style_idea_option_twentySeven_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "southwestern",
            label: t("dashboard:select_style_idea_option_twentyEight_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "traditional",
            label: t("dashboard:select_style_idea_option_twentyNine_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "transitional",
            label: t("dashboard:select_style_idea_option_Thirty_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "tropical",
            label: t("dashboard:select_style_idea_option_ThirtyOne_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "vaporwave",
            label: t("dashboard:select_style_idea_option_ThirtyTwo_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
          {
            value: "vintage",
            label: t("dashboard:select_style_idea_option_ThirtyThree_label"),
            image: "/assets/images/dashboard/styleIdeas/1.jpg",
          },
        ],
      },
      {
        id: 4,
        placeholder: t("dashboard:select_mode_placeholder"),
        options: [
          {
            value: "your Space (Image to Image)",
            label: t("dashboard:select_mode_option_one_label"),
          },
          {
            value: "concept (no image needed)",
            label: t("dashboard:select_mode_option_two_label"),
          },
        ],
      },
      {
        id: 5,
        placeholder: t("dashboard:select_quality_placeholder"),
        options: [
          {
            value: "half Quality",
            label: t("dashboard:select_quality_option_one_label"),
          },
          {
            value: "base Quality",
            label: t("dashboard:select_quality_option_two_label"),
          },
          {
            value: "high quality (2x cost)",
            label: t("dashboard:select_quality_option_three_label"),
          },
        ],
      },
      {
        id: 6,
        placeholder: t("dashboard:select_style_placeholder"),
        options: [
          {
            value: "style Low",
            label: t("dashboard:select_style_option_one_label"),
          },
          {
            value: "style Med",
            label: t("dashboard:select_style_option_two_label"),
          },
          {
            value: "style High",
            label: t("dashboard:select_style_option_three_label"),
          },
          {
            value: "style Very High",
            label: t("dashboard:select_style_option_four_label"),
          },
        ],
      },
      {
        id: 7,
        placeholder: t("dashboard:select_resolution_placeholder"),
        options: [
          {
            value: "high (slow)",
            label: t("dashboard:select_resolution_option_one_label"),
          },
          {
            value: "low (fast)",
            label: t("dashboard:select_resolution_option_two_label"),
          },
        ],
      },
    ],
  };

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
  const settings = useAppSelector((state) => state.settings);

  const dispatch = useAppDispatch();
  const { locale } = useRouter();
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
    dispatch(setActiveIdea(null));
    setImageUrl("");
    setTypeOfRoom(allRoomsOptions);
  };

  useEffect(() => {
    // show rooms according to space
    if (settings.selectedSpace && typeOfRoomOptions.groupedOptions) {
      if (
        settings.selectedSpace.value ===
        typeOfRoomOptions.groupedOptions[0].value
      ) {
        setTypeOfRoom(typeOfRoomOptions.groupedOptions[0].options);
      } else if (
        settings.selectedSpace.value ===
        typeOfRoomOptions.groupedOptions[1].value
      ) {
        setTypeOfRoom(typeOfRoomOptions.groupedOptions[1].options);
      } else if (
        settings.selectedSpace.value ===
        typeOfRoomOptions.groupedOptions[2].value
      ) {
        setTypeOfRoom(typeOfRoomOptions.groupedOptions[2].options);
      }
    }
    // if room selected space selected also

    if (settings.selectedTypeOfRoom && !settings.selectedSpace) {
      const lables = spaceOptions.options?.map((op) => op.value);
      if (lables?.includes(settings.selectedTypeOfRoom.ref as string)) {
        dispatch(
          setSelectedSpace(
            spaceOptions.options?.find(
              (element) => element.value === settings.selectedTypeOfRoom?.ref
            )
          )
        );
      }
    }
    // if room was selected and then change space
    if (
      settings.selectedSpace?.value !== settings.selectedTypeOfRoom?.ref &&
      settings.selectedTypeOfRoom &&
      settings.selectedSpace
    ) {
      dispatch(setSelectedTypeOfRoom(null));
    }

    // if image uploaded mode option will be selected
    if (settings.uploadedImage && modeOptions.options) {
      dispatch(setSelectedMode(modeOptions.options[0]));
    }
  }, [
    settings.selectedSpace,
    settings.selectedTypeOfRoom,
    settings.selectedMode,
    settings.uploadedImage,
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
            toast.success(t("dashboard:ideas_generated_successfully"));
            dispatch(
              setReceivedImage("/assets/images/dashboard/test_result.jpg")
            );
            setShowControls(false);
          })
          .catch((error) => toast.error(error.message));
      } else {
        reset();
        dispatch(setReceivedImage("/assets/images/dashboard/test_result.jpg"));
        toast.success(t("dashboard:ideas_generated_successfully"));
        setShowControls(false);
      }
    }
  };

  return (
    <div className="absolute xl:static top-0 left-0 h-full z-30 xl:z-auto w-full xl:w-auto bg-[rgba(20,20,20,0.76)] xl:bg-none">
      <div className="w-[300px] h-full px-[16px] bg-neutral-800 ">
        <div className="border-b-[1px] border-auth-border py-[16px] flex justify-between items-center">
          <button
            type="button"
            onClick={reset}
            className="content-center rounded-[26px] w-[128px] h-[32px] border-[1px] border-neutral-600 items-center text-sm font-[400] text-neutral-400"
          >
            <Image
              src="/assets/images/dashboard/icons/home/reset.svg"
              alt="reset-icon"
              width={16}
              height={16}
              className="mx-[4px]"
            />
            {t("dashboard:select_reset")}
          </button>
          <button
            onClick={() => setShowControls(false)}
            className="w-[40px] h-[40px] xl:hidden hover:bg-accent-color hover:border-none duration-200 text-neutral-50 rounded-[8px] border border-auth-border"
          >
            x
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
              t={t}
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
              t={t}
            />
          </div>
          <Select
            instanceId={chooseStyleOptions.id}
            options={chooseStyleOptions.options}
            setSelected={setSelectedChooseStyle}
            dispatch={dispatch}
            value={settings.selectedChooseStyle}
            placeholder={chooseStyleOptions.placeholder}
            t={t}
          />
          <Select
            instanceId={modeOptions.id}
            options={modeOptions.options}
            setSelected={setSelectedMode}
            dispatch={dispatch}
            value={settings.selectedMode}
            placeholder={modeOptions.placeholder}
            t={t}
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
              <div className="content-center relative flex-col w-full h-[152px] border-dashed border-[1.6px] border-accent-color rounded-[16px] mb-[40px]">
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
                  {locale === "ar"
                    ? "قم بإسقاط ملفك هنا أو"
                    : "Drop your file here or"}{" "}
                  <span className="text-accent-color">
                    {locale === "ar" ? "تصفح" : "Browse"}
                  </span>
                </div>
                <span className="text-neutral-300 text-xs">
                  {locale === "ar"
                    ? "أقصى حجم للملف 5 ميجا بايت"
                    : "The maximum file size is 5MB"}
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
                  t={t}
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
                  t={t}
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
              t={t}
            />
          </div>

          <div className="border-t-[1px] border-auth-border pt-[16px]">
            <button
              type="submit"
              className="coloredBtn w-full  text-md  h-[48px] rounded-[8px] text-white font-[500]"
            >
              {t("dashboard:select_desgin_btn")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Controls;
