import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
import coursesSlice from "./features/courses/coursesSlice";
import userSlice from "./features/user/userSlice";
// import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    coursesSlice: coursesSlice,
    userSlice: userSlice
  },
  
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});

export default store;