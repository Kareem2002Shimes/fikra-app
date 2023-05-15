import Select, { components } from "react-select";
import Image from "next/image";
import InfoModal from "../InfoModal";

const qIcon = (
  <Image
    src="/assets/images/dashboard/icons/sidebar/info.svg"
    alt="info-icon"
    width={24}
    height={24}
  />
);

function SelectOptions({
  options,
  value,
  placeholder,
  instanceId,
  dispatch,
  setSelected,
  setSpaceModal,
  setStyleModal,
  setRoomModal,
  setQualityModal,
  setResolutionModal,
}: any) {
  const customStyles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      color: "#EBECFF",
      backgroundColor: state.isSelected && "#0473FB",
      "&:hover": {
        backgroundColor: "#0473FB",
      },
      fontSize: "14px",
      lineHeight: "20px",
      margin: "10px 0",
      cursor: "pointer",
    }),

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: "transparent",
      height: "48px",
      width: "100%",
      border: "1px solid #484984",
      borderRadius: "8px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#0473FB",
      },
      marginBottom: "24px",
      fontSize: "14px",
      lineHeight: "16px",
      cursor: "pointer",
    }),
    singleValue: (defaultStyles: any) => ({
      ...defaultStyles,
      color: "#0473FB",
    }),
    dropdownIndicator: (defaultStyles: any) => ({
      ...defaultStyles,
      color: "#ACB0DC",
      "&:hover": {
        color: "#0473FB",
      },
    }),
    clearIndicator: (defaultStyles: any) => ({
      ...defaultStyles,
      color: "#ACB0DC",
      "&:hover": {
        color: "#767CC6",
      },
    }),
    placeholder: (defaultStyles: any) => ({
      ...defaultStyles,
      color: "#ACB0DC",
      fontSize: "14px",
      lineHeight: "16px",
    }),
    menu: (defaultStyles: any) => ({
      ...defaultStyles,
      background: "#1F2038",
    }),
    input: (defaultStyles: any) => ({
      ...defaultStyles,
      '[type="text"]': {
        color: "#EBECFF !important",
      },
    }),
  };

  const handleChange = (selected: any) => {
    dispatch(setSelected(selected));
  };
  const ValueContainer = ({ children, ...props }: any) => {
    return (
      components.ValueContainer && (
        <components.ValueContainer {...props}>
          <div className="flex items-center  ">
            {!!children &&
              props.selectProps.placeholder !== "Choose the style" &&
              props.selectProps.placeholder !== "Mode" && (
                <div className="mr-[8px]">{qIcon}</div>
              )}
            {children}
          </div>
        </components.ValueContainer>
      )
    );
  };
  return (
    <Select
      options={options}
      value={value}
      onChange={handleChange}
      styles={customStyles}
      instanceId={instanceId}
      placeholder={placeholder}
      components={{
        IndicatorSeparator: () => null,
        ValueContainer,
      }}
      isSearchable={true}
      noOptionsMessage={() => "No options found..."}
      isClearable={true}
    />
  );
}

export default SelectOptions;
