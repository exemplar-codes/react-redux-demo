import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";
import asyncReducer from "./async-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    asyncSlice: asyncReducer,
  },
});

export default store; // needed by Provider
