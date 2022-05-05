import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 

// Define a service using a base URL and expected endpoints
export const liveInfo = createApi({
  reducerPath: 'liveInfo',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getLiveInfo: builder.query<any, string>({
      query: () => `api/live`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLiveInfoQuery } = liveInfo