import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8800/api/",
    credentials: 'include'
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
    userInfo : builder.query({
      query :({userId}) =>({
        url : `users/${userId}`
      }),
      providesTags:["user"]
    }),
    addProperty : builder.mutation({
      query:({formData}) =>({
        url:`posts`,
        method:"POST",
        body:formData
      })
    })

  }),
});


export const {useUpdateUserMutation, useUserInfoQuery, useAddPropertyMutation} = userAPI
