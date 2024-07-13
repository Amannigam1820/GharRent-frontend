import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8800/api/",
    credentials: "include",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: ({ userId, formData }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["user"],
    }),
    userInfo: builder.query({
      query: ({ userId }) => ({
        url: `users/${userId}`,
      }),
      providesTags: ["user"],
    }),
    addProperty: builder.mutation({
      query: ({ formData }) => ({
        url: `posts`,
        method: "POST",
        body: formData,
      }),
    }),
    singleProperty: builder.query({
      query: ({ propertyId }) => ({
        url: `posts/${propertyId}`,
      }),
    }),
    searchProperty:builder.query({
      query:({city, type, minPrice, maxPrice,property,bedroom})=>{
        let base = `posts?city=${city}&type=${type}`;
        if(property){
          base += `&property=${property}`;
        }
        if(bedroom){
          base += `&bedroom=${bedroom}`;
        }
        if(minPrice){
          base += `&price=${minPrice}`;
        }
        if(maxPrice){
          base += `&price=${maxPrice}`;
        }
        return base;
      }
    })
  }),
});

export const {
  useUpdateUserMutation,
  useUserInfoQuery,
  useAddPropertyMutation,
  useSinglePropertyQuery,
  useSearchPropertyQuery
} = userAPI;
