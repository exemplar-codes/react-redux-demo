// import { createStore } from "redux";

// const initialState = { count: 0, showCount: true };

// const counterReducer = (state = initialState, action) => {
//   console.log("Counter store changed");
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     case "INCREASE_BY":
//       return { ...state, count: state.count + action.amount };
//     case "TOGGLE":
//       return { ...state, showCount: !state.showCount };

//     default:
//       return state;
//   }
// };

// const counterStore = createStore(counterReducer);

// export default counterStore;

import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = { count: 0, showCount: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    increaseBy: (state, action) => {
      state.count += action.payload;
    },
    toggleCounter: (state) => {
      state.showCount = !state.showCount;
    },
  },
});

// we only need:
// 1. The reducer to create stire
// 2. Action creators for dispatch action

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
