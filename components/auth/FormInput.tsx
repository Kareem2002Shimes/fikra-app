import { AuthProps } from "@/types/AuthTypes";
import Link from "next/link";
import styles from "./Auth.module.css";

function FormInput({ page }: AuthProps) {
  return (
    <form className="w-full">
      <div className="mb-6">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="auth-box bg-transparent rounded-[8px] text-sm text-white border border-input-border py-[12px] px-[16px] focus:border-accent-color"
          placeholder="Please enter your email"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="auth-box bg-transparent rounded-[8px] text-sm  text-white border border-input-border py-[12px] px-[16px] focus:border-accent-color"
          placeholder="At least 6 characters"
          required
        />
      </div>
      {page === "login" && (
        <div className="flex items-start auth-box justify-between">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-[24px] h-[24px] text-center leading-[24px] appearance-none rounded-[4px] bg-transparent border border-input-border cursor-pointer relative after:content-check after:absolute  after:left-0 after:top-0 after:w-full after:h-full after:invisible checked:after:visible "
              required
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
      <button
        type="submit"
        className={`text-white ${styles.sub} text-md font-[500] mb-[30px] auth-box rounded-[8px]`}
      >
        {page === "login" ? "Login" : page === "signup" && "Signup"}
      </button>
    </form>
  );
}

export default FormInput;
