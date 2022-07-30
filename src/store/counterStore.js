import { createStore } from "redux";

const initialState = { count: 0, showCount: true };

const counterReducer = (state = initialState, action) => {
  console.log("Counter store changed");
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "INCREASE_BY":
      return { ...state, count: state.count + action.amount };
    case "TOGGLE":
      return { ...state, showCount: !state.showCount };

    default:
      return state;
  }
};

const counterStore = createStore(counterReducer);

export default counterStore;
