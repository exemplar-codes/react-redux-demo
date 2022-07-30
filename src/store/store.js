import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";

const store = configureStore({ reducer: counterReducer });

export default store; // needed by Provider
