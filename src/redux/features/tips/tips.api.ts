import { baseApi } from "@/redux/api/baseApi";
import { TTip } from "@/types";
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
      transformResponse: (response: TResponseRedux<TTip[]>) => {
        return { data: response.data };
      },
    }),
    getSingleTip: builder.query({
      query: (id: string) => ({
        url: `/tips/${id}`,
        method: "GET",
      }),
      providesTags: ["tips"],
      transformResponse: (response: TResponseRedux<TTip>) => {
        return { data: response.data };
      },
    }),
  }),
});

export const { useTipsPostMutation, useGetAllTipsQuery, useGetSingleTipQuery } = tipsApi; 
