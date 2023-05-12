import Image from "next/image";
import { useState } from "react";
import Select, { components } from "react-select";
import DefaultView from "./DefaultView";
import StyleSlider from "./StyleSlider";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { setReceivedImage } from "@/redux/features/settings/settingsSlice";

const options = [
  {
    value: "choose the type of image",
    label: "Choose the type of image",
    disabled: true,
  },
  { value: "type img (png)", label: "Type img (png)" },
  { value: "type img (jpg)", label: "Type img (jpg)" },
];
function View() {
  const [selected, setSelected] = useState(null);
  const [ideas, setIdeas] = useState([1, 2, 3, 4]);
  const [activeIdea, setActiveIdea] = useState(null);
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  const customStyles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      color: "#EBECFF",
      backgroundColor: state.isSelected && "#0473FB",
      "&:hover": {
        backgroundColor: "#0473FB",
      },
      fontSize: "16px",
      lineHeight: "24px",
      cursor: "pointer",
    }),

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: "transparent",
      boxShadow: "none",
      cursor: "pointer",
      border: "none",
    }),

    placeholder: (defaultStyles: any) => ({
      ...defaultStyles,
      color: "#0473FB",
      fontSize: "16px",
      lineHeight: "24px",
    }),
    menu: (defaultStyles: any) => ({
      ...defaultStyles,
      background: "#1F2038",
      borderRadius: "16px",
      width: "228px",
      height: "152px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
  };
  const handleChange = (selected: any) => {
    setSelected(selected);
  };

  const ValueContainer = ({ children, ...props }: any) => {
    return (
      components.ValueContainer && (
        <components.ValueContainer {...props}>
          <div className="flex items-center">
            {!!children && (
              <Image
                src="/images/dashboard/icons/home/download-icon.svg"
                width={24}
                height={24}
                alt="download-icon"
                className="mr-[8px]"
              />
            )}
            {children}
          </div>
        </components.ValueContainer>
      )
    );
  };
  const handleIdeas = (idea: number) => {
    idea === 1
      ? dispatch(setReceivedImage("/images/dashboard/singleIdea.jpg"))
      : idea === 2
      ? dispatch(setReceivedImage("/images/dashboard/singleIdea2.jpg"))
      : idea === 3
      ? dispatch(setReceivedImage("/images/dashboard/singleIdea3.jpg"))
      : idea === 4 &&
        dispatch(setReceivedImage("/images/dashboard/singleIdea4.jpg"));
  };
  return (
    <div className=" overflow-y-scroll w-full">
      <div className="px-[24px] pt-[16px]">
        <div className="flex items-center relative mb-[8px]">
          <Select
            options={options}
            value={"Download" as any}
            onChange={handleChange}
            styles={customStyles}
            instanceId={options.map((op) => op.value) as any}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: () => null,
              ValueContainer,
            }}
            isSearchable={false}
            placeholder="Download"
            isOptionDisabled={(option) => option.disabled}
          />
          <button type="button" className="ml-[16px]">
            <Image
              src="images/dashboard/icons/home/share-icon.svg"
              alt="download-icon"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="h-[526px] bg-neutral-800 rounded-[16px] p-[16px] flex">
          <div className="w-full h-full relative content-center rounded-[8px] mr-[16px]">
            {settings.receivedImage ? (
              <Image src={settings.receivedImage} alt="img" fill={true} />
            ) : (
              <DefaultView />
            )}

            {/* Test Image here */}
          </div>
          <div className="w-[135px] h-full">
            {ideas.map((idea) => (
              <button
                type="button"
                key={idea}
                onClick={() => {
                  setActiveIdea(idea as any);
                  handleIdeas(idea);
                }}
                className={`content-center ${
                  activeIdea === idea
                    ? "bg-accent-color border-transparent"
                    : " border-[1px] border-input-border"
                } hover:bg-accent-color transition-all duration-200 ease-in hover:border-transparent flex-col mb-[16px] w-[135px] h-[64px] rounded-[16px]`}
              >
                <span className="text-neutral-200 text-xs font-[500] mb-[2px]">
                  Show
                </span>
                <span className="text-md font-[500] text-white">
                  Idea {idea}
                </span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                dispatch(setReceivedImage("/images/dashboard/test_result.jpg"));
                setActiveIdea(null);
              }}
              className="w-[135px] h-[120px]  mt-[70px] text-white content-center flex-col primary-border"
            >
              <Image
                src="images/dashboard/icons/home/new-idea-icon.svg"
                alt="new-idea-icon"
                width={24}
                height={24}
                className="mb-[8px]"
              />
              New Ideas
            </button>
          </div>
        </div>
      </div>
      <div className="px-[24px] mt-[16px] border-t-[1px] border-input-border">
        <span className="text-white text-lg font-[700] py-[15px] block">
          Choose the style of ideas
        </span>

        <div className="relative">
          <StyleSlider />
        </div>
      </div>
    </div>
  );
}

export default View;
