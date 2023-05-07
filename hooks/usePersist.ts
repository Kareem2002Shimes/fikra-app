import { useEffect, useState } from "react";
import Cookies from "js-cookie";
export function usePersist() {
  const [persist, setPersist] = useState<any>(
    (Cookies.get("persist") && JSON.parse(Cookies.get("persist") as string)) ||
      false
  );

  useEffect(() => {
    Cookies.set("persist", JSON.stringify(persist));
  }, [persist]);
  return [persist, setPersist];
}
export function useEmailRef() {
  const [emailRef, setEmailRef] = useState<any>(
    (Cookies.get("email") && (Cookies.get("email") as string)) || ""
  );

  useEffect(() => {
    Cookies.set("email", emailRef);
  }, [emailRef]);
  return [emailRef, setEmailRef];
}
