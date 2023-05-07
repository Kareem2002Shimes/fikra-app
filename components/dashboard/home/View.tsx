import Image from "next/image";
import { useState } from "react";
import Select, { components } from "react-select";

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
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState(null);
  const [ideas, setIdeas] = useState(["1", "2", "3", "4"]);
  const [styleIdeas, setStyleIdeas] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
  ]);
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
  return (
    <div className="w-[calc(100%-300px)] overflow-y-scroll">
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
            <Image src="/images/dashboard/test.png" alt="img" fill={true} />
            {/* Test Image here */}
          </div>
          <div className="w-[135px] h-full">
            {ideas.map((idea) => (
              <button
                type="button"
                key={idea}
                className="content-center flex-col mb-[16px] w-[135px] h-[64px] rounded-[16px] border-[1px] border-input-border"
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
              className="w-[135px] h-[120px] mt-[70px] text-white content-center flex-col primary-border"
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
        <span className="text-white text-lg font-[700] py-[10px] block">
          Choose the style of ideas
        </span>
        <div className="pb-[16px] flex items-center overflow-x-scroll">
          {styleIdeas.map((idea) => (
            <Image
              key={idea}
              src="/images/dashboard/styleIdeas/1.jpg"
              alt="style-ideas-img"
              width={150}
              height={150}
              className="rounded-[8px] object-contain mr-[12px] last-of-type:mr-0 cursor-pointer"
            />
          ))}

          {/* Test Image here */}
          {/* <div className="w-[15] h-[15] p-2 absolute top-0 right-0 rounded-[50%] bg-accent-color border-[2px] border-neutral-900">
                <Image
                  src="/images/dashboard/icons/home/checkedArrow.svg"
                  alt="arrow-icon"
                  width={12}
                  height={12}
                />
              </div> */}
        </div>
      </div>
    </div>
  );
}

export default View;
