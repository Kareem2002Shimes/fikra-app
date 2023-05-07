import Image from "next/image";
import Select, { components } from "react-select";
import Link from "next/link";
const LangIcon = (
  <div className="mr-[8px]">
    <Image
      src="/images/home/lang.svg"
      alt="arrow-icon"
      width={24}
      height={24}
      className="rotate-[-270deg]"
    />
  </div>
);
const customStyles = {
  option: (defaultStyles: any, state: any) => ({
    ...defaultStyles,
    color: "#F5F6FF",
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
    border: "none",
    boxShadow: "none",
    fontSize: "14px",
    lineHeight: "16px",
    cursor: "pointer",
    width: "fit-content",
  }),
  singleValue: (defaultStyles: any) => ({
    ...defaultStyles,
    color: "#0473FB",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
  }),
  dropdownIndicator: (defaultStyles: any) => ({
    ...defaultStyles,
    color: "#F5F6FF",
    "&:hover": {
      color: "#0473FB",
    },
  }),

  menu: (defaultStyles: any) => ({
    ...defaultStyles,
    background: "#1F2038",
  }),
};
const ValueContainer = ({ children, ...props }: any) => {
  return (
    components.ValueContainer && (
      <components.ValueContainer {...props}>
        <div className="flex items-center">
          {!!children && LangIcon}
          {children}
        </div>
      </components.ValueContainer>
    )
  );
};
const options = [
  { value: "en", label: "En" },
  { value: "ar", label: "Ar" },
  { value: "ger", label: "Ger" },
];
function Header() {
  return (
    <header>
      <div className="home-container py-[8px] flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            width={28}
            height={28}
            alt="logo-img"
            className="mr-[8px]"
          />
          <Image
            src="/images/logo-text.svg"
            width={45}
            height={45}
            alt="logo-img"
          />
        </Link>
        <div className="flex items-center">
          <Select
            options={options}
            isClearable={false}
            styles={customStyles}
            isSearchable={false}
            components={{
              IndicatorSeparator: () => null,
              ValueContainer,
              Placeholder: () => null,
            }}
            defaultValue={options[0]}
          />
          <Link
            href="/"
            className="coloredBtn hidden sm:flex ml-[24px] w-[130px] h-[32px] content-center text-neutral-50 rounded-[8px]"
          >
            Try for free
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
