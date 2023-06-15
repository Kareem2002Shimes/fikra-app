import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Form from "./Form";
import { Fragment } from "react";
import { signIn } from "next-auth/react";

function TextBox({ t }: any) {
  const page: string = useRouter().pathname;

  return (
    <div className="px-[40px] content-center justify-start flex-col relative z-50 basis-[100%] md:basis-[441px] lg:basis-[503px]">
      {page === "/auth/forget-password" ? (
        <Fragment>
          <Link href="/">
            <div className="relative block mt-[43px] mx-auto w-[82px] h-[105.76px]">
              <Image
                priority={true}
                src="/assets/images/logo.svg"
                fill={true}
                alt="logo-img"
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
          <div className="mb-[85px] mt-[70px] w-full">
            <h4 className="text-neutral-100 font-[700] mb-[8px] text-[24px] leading-[32px] sm:text-[28px] sm:leading-[36px]">
              Forgot your password?
            </h4>
            <p className="text-neutral-200 font-[500] text-sm sm:text-md">
              Please enter your email address
              <br />
              You message reset
            </p>
          </div>
        </Fragment>
      ) : page === "/auth/verify-account" ? (
        <Fragment>
          <Link href="/">
            <div className="relative block mt-[80px] mx-auto w-[101.9px] h-[102px]">
              <Image
                priority={true}
                src="/assets/images/logo.svg"
                fill={true}
                alt="logo-img"
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
          <div className="pt-[80px] mb-[40px] w-full md:w-[308px]">
            <h6 className="text-neutral-100 font-[600] mb-[20px]">
              Enter the verification code
            </h6>
            <p className="text-md md:text-sm font-[400] text-neutral-200">
              A verification code has been sent to this email{" "}
              <span className="text-accent-color">ahmed@gmail.com</span>
            </p>
          </div>
        </Fragment>
      ) : (
        <div className="w-full">
          <Link href="/" className="">
            <div className="relative block mt-[43px] mx-auto w-[82px] h-[105.76px]">
              <Image
                src="/assets/images/logo.svg"
                fill={true}
                alt="logo-img"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="content-center mt-[15px]">
              <Image
                src="/assets/images/logo-text.svg"
                alt="logo-img"
                width={100}
                height={50}
              />
            </div>
          </Link>
          <div className="text-white mt-[20px] mb-[30px] font-[700] auth-box h-auto">
            {page === "/auth/login" ? (
              <h4>
                Welcome to Fikra <br /> Sign in
              </h4>
            ) : (
              page === "/auth/signup" && <h4>Create your account with Fikra</h4>
            )}
          </div>
          <button
            className="flex item-center justify-center auth-box p-[12px] rounded-[8px] bg-neutral-700"
            type="button"
            data-purpose="google-login"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            <Image
              src="/assets/images/auth/icons/google.svg"
              alt="google-img"
              width={25}
              height={25}
            />
            <span className="text-white text-md font-[500] mx-[20px]">
              Continue with Google
            </span>
          </button>
          <div className="text-center flex items-center justify-between auth-box text-md font-[500] text-neutral-200">
            <span className="w-[45%] h-[1px] bg-auth-border block"></span>
            <span>or</span>
            <span className="w-[45%] h-[1px] bg-auth-border block"></span>
          </div>
        </div>
      )}

      <Form page={page} />
      <div className="content-center font-[500] text-sm pb-[30px] auth-box">
        <Fragment>
          <span className="text-white pr-[8px] sm:px-[10px]">
            {page === "/auth/login" && "Don't have an account?"}
            {page === "/auth/signup" && "Already have an account?"}
          </span>
          <Link
            href={page === "/auth/login" ? "/auth/signup" : "/auth/login"}
            className="text-accent-color hover:underline"
          >
            {page === "/auth/login" && "Create account"}
            {page === "/auth/signup" && "Log in"}
          </Link>
        </Fragment>
      </div>
    </div>
  );
}

export default TextBox;
