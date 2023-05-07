// import { useEffect, useRef, useState } from "react";
// import { useRefreshMutation } from "./authApiSlice";
// import { usePersist } from "@/hooks/usePersist";
// import { selectCurrentToken } from "./authSlice";
// import { useSelector } from "react-redux";
// function PersistLogin({ children }: any) {
//   const [persist] = usePersist();
//   const token = useSelector(selectCurrentToken);
//   const effectRan = useRef(false);
//   const [trueSuccess, setTrueSuccess] = useState(false);
//   const [
//     refresh,
//     { isLoading, isError, isSuccess, error, isUninitialized },
//   ]: any = useRefreshMutation();
//   useEffect((): any => {
//     if (effectRan.current === true || process.env.NODE_ENV !== "development") {
//       const verifyRefreshToken = async () => {
//         console.log("verifying refresh token");
//         try {
//           await refresh();
//           setTrueSuccess(true);
//         } catch (err) {
//           console.error(err);
//         }
//       };
//       if (!token) verifyRefreshToken();
//     }
//     return () => (effectRan.current = true);
//   }, []);
//   if (!persist) {
//     // persist: no
//     console.log("no persist");
//     children = children;
//   } else if (isLoading) {
//     //persist: yes, token: no
//     console.log("loading");
//     children = <h1>Loading...</h1>;
//   } else if (isError) {
//     // persist: yes, token: no
//     console.log("error");
//   } else if (isSuccess && trueSuccess) {
//     // persist: yes, token: yes
//     console.log("success");
//     children = children;
//   } else if (token && isUninitialized) {
//     //persist: yes, token: yes
//     console.log("token and uninit");
//     console.log(isUninitialized);
//     children = children;
//   }
//   return children;
// }

// export default PersistLogin;
