import { baseApi } from "@/redux/api/baseApi";
import { TResponseRedux } from "@/types/global.type";

const tipsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    tipsPost: builder.mutation({
      query: (data) => ({
        url: "/tips",
        method: "POST",
        body: data,
      }),
    }),
    getAllTips: builder.query({
      query: () => ({
        url: "/tips",
        method: "GET",
      }),
      providesTags: ["tips"],
      transformResponse: (response: TResponseRedux<any>) => {
        return { data: response.data };
      },
    }),
  }),
});

export const { useTipsPostMutation, useGetAllTipsQuery } = tipsApi; 
