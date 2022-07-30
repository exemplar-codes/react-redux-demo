import classes from "./Counter.module.css";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";

const Counter = (props) => {
  const count = useSelector((state) => state.counter.count);
  const showCount = useSelector((state) => state.counter.showCount);

  const dispatch = useDispatch();

  const incrementHandler = () => dispatch(counterActions.increment());
  const decrementHandler = () => dispatch(counterActions.decrement());
  const increaseByHandler = () =>
    dispatch(counterActions.increaseBy(props.amount));
  const toggleCounterHandler = () => dispatch(counterActions.toggleCounter());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCount && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByHandler}>Increase by {props.amount}</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
