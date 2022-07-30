import classes from "./Counter.module.css";
import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {props.showCount && <div className={classes.value}>{props.count}</div>}
      <div>
        <button onClick={props.decrementHandler}>Decrement</button>
        <button onClick={props.incrementHandler}>Increment</button>
        <button onClick={props.increaseByHandler}>
          Increase by {props.amount}
        </button>
      </div>
      <button onClick={props.toggleCounterHandler}>Toggle Counter</button>
      {props.bingo}
    </main>
  );
};

function mapStateToProps(state) {
  return { count: state.count, showCount: state.showCount };
}

function mapDispatchToProps(dispatch, props) {
  return {
    incrementHandler: () => dispatch({ type: "INCREMENT" }),
    decrementHandler: () => dispatch({ type: "DECREMENT" }),
    increaseByHandler: () =>
      dispatch({ type: "INCREASE_BY", amount: props.amount }),
    toggleCounterHandler: () => dispatch({ type: "TOGGLE" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
