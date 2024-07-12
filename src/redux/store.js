import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./reducer/auth"
import { userAPI } from "./api/api"


export const store = configureStore({
    reducer:{
        [authSlice.name]:authSlice.reducer,
        [userAPI.reducerPath]:userAPI.reducer
    },
    middleware: (mid) => [
        ...mid(),
        userAPI.middleware,
       
      ],
   
})