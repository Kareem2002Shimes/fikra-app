import {
  createApi,
  fetchBaseQuery,
  BaseQueryApi,
} from "@reduxjs/toolkit/query/react";
import {
  InitialStateType,
  setCredentials,
} from "../../features/auth/authSlice";
import { RootState } from "../store";
const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.BASE_URL}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    // const token: any = (getState() as RootState).auth.accessToken;
    // if (token) {
    //   headers.set("authorization", `Bearer ${token}`);
    // }
    // return headers;
  },
});

const baseQueryWithReauth = async (
  args: string,
  api: BaseQueryApi,
  extraOptions: any
) => {
  // console.log(args) // request url, method, body
  // console.log(api) // signal, dispatch, getState()
  // console.log(extraOptions) //custom like {shout: true}

  let result = await baseQuery(args, api, extraOptions);

  // If you want, handle other status codes, too
  if (result?.error?.status === 403) {
    // console.log("sending refresh token");

    // send refresh token to get new access token
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);

    if (refreshResult?.data) {
      // store the new token
      api.dispatch(
        setCredentials({ ...refreshResult.data } as InitialStateType)
      );

      // retry original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 403) {
        (refreshResult.error.data as any).message = "Your login has expired. ";
      }
      return refreshResult;
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
