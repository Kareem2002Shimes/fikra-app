import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import AuthCode, { AuthCodeRef } from "react-auth-code-input";
import { useEmailRef, usePersist } from "@/hooks/usePersist";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { login, signup } from "@/services/authService";

type FormProps = {
  page: string;
};
export type FormData = {
  email: string;
  password: string;
};
function Form({ page }: FormProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [persist, setPersist] = usePersist();
  const [emailRef, setEmailRef] = useEmailRef();
  const [showPassword, setShowPassword] = useState(false);
  const [result, setResult] = useState<string>();
  const AuthInputRef = useRef<AuthCodeRef>(null);

  const schema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  });

  const {
    reset,
    register,
    handleSubmit,

    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const handleOnChange = (res: string) => {
    setResult(res);
  };

  const handleToggle = () => setPersist((prev: any) => !prev);
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (page === "/auth/login") {
      const status = await login(data);
      if (status?.ok) {
        setEmailRef(data.email);
        toast.success("Logged in");
        router.replace(status.url as string);
        reset();
      }
      if (status?.error) {
        toast.error(status.error);
      }
    }
    if (page === "/auth/signup") {
      const resData = await signup(data);
      if (resData) {
        const status = await login(data);
        if (status?.ok) {
          toast.success(resData.message);
          router.replace(status.url as string);
          reset();
        }
        if (status?.error) {
          toast.error(resData.message);
        }
      }
    }
    if (page === "/auth/forget-password") {
      router.replace("/auth/verify-account");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {page === "/auth/verify-account" ? (
        <Fragment>
          <div className="mx-auto md:w-[308px] mb-[48px]">
            <AuthCode
              length={4}
              containerClassName="flex items-center"
              inputClassName="outline-none border-b-[1px] border-neutral-100 mx-3 text-center bg-transparent text-neutral-100 font-[700] text-[32px] leading-[48px] w-[48px] h-[64px]"
              autoFocus={true}
              onChange={handleOnChange}
              ref={AuthInputRef}
            />
          </div>
          <div className="text-md md:text-sm font-[500] text-white mb-[48px] mx-auto w-full md:w-[308px]">
            Didn't receive the verification code?{" "}
            <button type="button" className="text-accent-color hover:underline">
              Resend
            </button>
          </div>
        </Fragment>
      ) : page === "/auth/forget-password" ? (
        <div className="mb-[76px]">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`auth-box bg-transparent rounded-[8px] text-sm text-white border ${
              errors.email ? "border-error-500" : "border-input-border"
            } py-[12px] px-[16px] focus:border-accent-color`}
            placeholder="Please enter your email"
            {...register("email", { required: true })}
          />
        </div>
      ) : (
        <Fragment>
          <div className="mb-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue={persist && page === "/auth/login" ? emailRef : ""}
              className={`auth-box bg-transparent rounded-[8px] text-sm text-white border ${
                errors.email ? "border-error-500" : "border-input-border"
              } py-[12px] px-[16px] focus:border-accent-color`}
              placeholder="Please enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-error-500 mt-[10px] block text-sm font-[500]">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="flex relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className={`auth-box bg-transparent rounded-[8px] text-sm  text-white border ${
                  errors.password ? "border-error-500" : "border-input-border"
                } py-[12px] pl-[16px] pr-[50px] focus:border-accent-color`}
                placeholder="At least 6 characters"
                {...register("password", { required: true })}
              />
              <Image
                className="absolute right-[20px] cursor-pointer top-[50%] translate-y-[-50%]"
                src="/images/auth/icons/eyes.svg"
                alt="eye-img"
                width={20}
                height={20}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            {errors.password && (
              <span className="text-error-500 mt-[10px] block text-sm font-[500]">
                {errors.password.message}
              </span>
            )}
          </div>

          {page === "/auth/login" && (
            <div className="flex items-start auth-box justify-between">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  checked={persist}
                  onChange={handleToggle}
                  className="w-[24px] h-[24px] text-center leading-[24px] appearance-none rounded-[4px] bg-transparent border border-input-border cursor-pointer relative after:content-check after:absolute  after:left-0 after:top-0 after:w-full after:h-full after:invisible checked:after:visible "
                />
                <label
                  htmlFor="remember"
                  className="pl-[10px] cursor-pointer text-sm font-[500] text-white"
                >
                  Remember me
                </label>
              </div>

              <Link
                href="/auth/forget-password"
                className="text-accent-color text-sm font-[500] hover:underline"
              >
                Forget Password
              </Link>
            </div>
          )}
        </Fragment>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`text-white mx-auto block coloredBtn ${
          isSubmitting && "onSub"
        } text-md font-[500] mb-[30px] auth-box ${
          page === "/auth/verify-account" && "w-full md:w-[308px]"
        }
        ${page === "/auth/forget-password" && "w-full"} rounded-[8px]`}
      >
        {page === "/auth/login" && "Login"}
        {page === "/auth/signup" && "Signup"}
        {page === "/auth/verify-account" && "Confirm"}
        {page === "/auth/forget-password" && "Send"}
      </button>
    </form>
  );
}

export default Form;
