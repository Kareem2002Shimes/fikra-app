import Image from "next/image";
import Select, { components } from "react-select";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Fragment } from "react";
const KSAIcon = (
  <div className="mr-[8px]">
    <Image src="/images/home/KSA.svg" alt="arrow-icon" width={24} height={24} />
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
    zIndex: "9999",
  }),
};
const ValueContainer = ({ children, ...props }: any) => {
  return (
    components.ValueContainer && (
      <components.ValueContainer {...props}>
        <div className="flex items-center">
          {props
            .getValue()
            .map(
              (op: any) =>
                op.value === "ar" && <div key={op.value}>{KSAIcon}</div>
            )}
          {children}
        </div>
      </components.ValueContainer>
    )
  );
};
const options = [
  { value: "en", label: "En" },
  { value: "ar", label: "عربي" },
  { value: "ger", label: "Ger" },
];
function Header() {
  const { data } = useSession();
  return (
    <header className="border-b-[1px] border-input-border relative z-50">
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
            instanceId={options[0].value as string}
            components={{
              IndicatorSeparator: () => null,
              ValueContainer,
              Placeholder: () => null,
            }}
            defaultValue={options[1]}
          />
          {data?.user ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-neutral-50 text-md font-[500] mr-[8px] w-fit sm:w-[130px] h-[40px] content-center transition-all duration-200 ease-in-out hover:text-accent-color"
            >
              Logout
            </button>
          ) : (
            <Fragment>
              <Link
                href="/auth/login"
                className="text-neutral-50 text-md font-[500] mr-[8px] w-fit sm:w-[130px] h-[40px] content-center transition-all duration-200 ease-in-out hover:text-accent-color"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="coloredBtn-home-header text-md font-[500] hidden sm:flex w-[195px] h-[40px] content-center text-neutral-50 rounded-[8px]"
              >
                Create an account
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
