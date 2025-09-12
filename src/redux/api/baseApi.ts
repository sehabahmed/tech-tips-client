import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tech-tips-server.vercel.app/api/v1",
    credentials: "include",
  }),
  tagTypes: ["tips", "tipsCategory"],
  endpoints: () => ({}),
});
