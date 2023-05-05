import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const vesselsApiHeaders = {
    "Authorization": process.env.API_TOKEN
}

const baseUrl = "/api/v2";

const createRequest = (url, options) => ({ url, headers: vesselsApiHeaders, ...options });

export const vesselsApi = createApi({
    reducerPath: "vesselsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getEmptyVessels: builder.query({
            query: () => createRequest("/empties",  ),
        }),

        getVesselDetails: builder.query({
            query: (uuid) => createRequest(`/vessels/${uuid}`)
        }),

        getContactCard: builder.query({
            query: (uuid) => createRequest(`/vessels/${uuid}/download/contact-card`,{
                responseHandler: (response) => response.blob()
            })

        }),


    })
});

export const {
    useGetEmptyVesselsQuery,
    useGetVesselDetailsQuery,
    useGetContactCardQuery,
} = vesselsApi;