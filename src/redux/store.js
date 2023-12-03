import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
import coursesSlice from "./features/courses/coursesSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    coursesSlice: coursesSlice,
  },
  
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});

export default store;