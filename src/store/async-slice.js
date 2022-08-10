const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  fetching: false,
  error: null,
  fetchedData: null,
};

const asyncSlice = createSlice({
  name: "asyncSlice",
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    setFetching(state, action) {
      state.fetching = action.payload;
    },
    setFetchedData(state, action) {
      state.fetchedData = action.payload;
    },
  },
});

export const asyncActions = asyncSlice.actions;
export default asyncSlice.reducer;
