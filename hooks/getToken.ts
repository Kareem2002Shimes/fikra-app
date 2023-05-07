import Cookies from "js-cookie";
import { getSession } from "next-auth/react";

async function getToken() {
  const token = Cookies.get("next-auth.session-token");
  console.log(token);
  return;
}
export default getToken;
