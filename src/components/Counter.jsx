import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((store) => store.count);
  const showCount = useSelector((store) => store.showCount);

  const dispatch = useDispatch();

  const incrementHandler = () => dispatch({ type: "INCREMENT" });
  const decrementHandler = () => dispatch({ type: "DECREMENT" });
  const toggleCounterHandler = () => dispatch({ type: "TOGGLE" });

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCount && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
