import Link from "next/link";
import FormInput from "./FormInput";
import Image from "next/image";
import { Fragment } from "react";
import { AuthProps } from "@/types/AuthTypes";
import styles from "./Auth.module.css";
function Auth({ page }: AuthProps) {
  return (
    <div className="flex min-h-screen w-full overflow-hidden ">
      <div className="px-[40px] content-center flex-col relative z-50 basis-[100%] md:basis-[441px] lg:basis-[503px]">
        <Link href="/">
          <div className="relative block mt-[43px] mx-auto w-[82px] h-[105.76px]">
            <Image
              src="/images/auth/logo.png"
              fill={true}
              alt="logo-img"
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>

        <div className="text-white mt-[20px] mb-[30px] font-[700] auth-box h-auto">
          {page === "login" ? (
            <h4>
              Welcome to Fikra <br /> Sign in
            </h4>
          ) : (
            page === "signup" && <h4>Create your account with Fikra</h4>
          )}
        </div>

        <button
          className="flex item-center justify-center auth-box p-[12px] rounded-[8px] bg-neutral-700"
          type="button"
          data-purpose="google-login"
        >
          <Image
            src="/images/auth/icons/google.svg"
            alt="google-img"
            width={25}
            height={25}
          />
          <span className="text-white text-md font-[500] mx-[20px]">
            Continue with Google
          </span>
        </button>
        <div className="text-center flex items-center justify-between auth-box text-md font-[500] text-neutral-200">
          <span className="w-[45%] h-[1px] bg-custom-border block"></span>
          <span>or</span>
          <span className="w-[45%] h-[1px] bg-custom-border block"></span>
        </div>
        <FormInput page={page} />
        <div className="content-center font-[500] text-sm pb-[30px] auth-box">
          {page === "login" ? (
            <Fragment>
              <span className="text-white pr-[8px] sm:px-[10px]">
                Don't have an account?
              </span>
              <Link
                href="/auth/signup"
                className="text-accent-color hover:underline"
              >
                Create account
              </Link>
            </Fragment>
          ) : (
            page === "signup" && (
              <Fragment>
                <span className="text-white pr-[8px] sm:px-[10px]">
                  Already have an account?
                </span>
                <Link
                  href="/auth/login"
                  className="text-accent-color hover:underline"
                >
                  Log in
                </Link>
              </Fragment>
            )
          )}
        </div>
      </div>
      <div
        className="pt-[90px] hidden md:block relative md:basis-[calc(100%-441px)] lg:basis-[calc(100%-503px)]"
        style={{
          backgroundImage:
            "linear-gradient(139.41deg, #3C79FE 13.26%, #7B1AD2 106.32%)",
        }}
      >
        <div className="pl-[40px] mb-[30px]">
          <h3 className="font-[700] text-neutral-50 mb-[15px]">
            Live your design experience <br /> With the help of artificial
            intelligence
          </h3>
          <p className="font-[400] w-[65%] text-md text-neutral-100">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>

        <div
          className={`absolute bottom-0 xl:bottom-[-20%] mr-[30px] left-0 ${styles.img} pr-[10px] pt-[10px]`}
        >
          <Image
            src="/images/auth/img.jpg"
            alt="auth-img"
            width={860}
            height={530}
            className="rounded-tr-[16px] relative z-20"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Auth;
