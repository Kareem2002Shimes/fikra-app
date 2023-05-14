import { FormData } from "@/components/auth/Form";
import { signIn } from "next-auth/react";

export const signup = async (data: FormData) => {
  try {
    const res = await fetch(`http://localhost:5000/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    return resData;
  } catch (error) {
    return error;
  }
};

export const login = async (data: FormData) => {
  const status = await signIn("credentials", {
    ...data,
    redirect: false,
    callbackUrl: "/dashboard",
  });
  return status;
};
