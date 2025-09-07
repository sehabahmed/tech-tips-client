import { baseApi } from "@/redux/api/baseApi";

const tipsApi = baseApi.injectEndpoints({
    endPoints: (builder) => ({
        tipsPost: builder.mutation({
            query: (data) => ({
                url: '/tips',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['tips']
        }),
        getAllTips: builder.query({
            query: () => ({
                url: '/tips',
                method: 'GET',  
            })
        })
    }),
})