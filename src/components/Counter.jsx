import classes from "./Counter.module.css";
import React from "react";
import { connect } from "react-redux";

// import { useSelector, useDispatch } from "react-redux";
// const Counter = () => {
//   const count = useSelector((store) => store.count);
//   const showCount = useSelector((store) => store.showCount);

//   const dispatch = useDispatch();

//   const incrementHandler = () => dispatch({ type: "INCREMENT" });
//   const decrementHandler = () => dispatch({ type: "DECREMENT" });
//   const toggleCounterHandler = () => dispatch({ type: "TOGGLE" });

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {showCount && <div className={classes.value}>{count}</div>}
//       <div>
//         <button onClick={decrementHandler}>Decrement</button>
//         <button onClick={incrementHandler}>Increment</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends React.Component {
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {this.props.showCount && (
          <div className={classes.value}>{this.props.count}</div>
        )}
        <div>
          <button onClick={this.props.decrementHandler.bind(this)}>
            Decrement
          </button>
          <button onClick={this.props.incrementHandler.bind(this)}>
            Increment
          </button>
        </div>
        <button onClick={this.props.toggleCountHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count, showCount: state.showCount };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementHandler: () =>
      dispatch({
        type: "INCREMENT",
      }),
    decrementHandler: () =>
      dispatch({
        type: "DECREMENT",
      }),
    toggleCountHandler: () =>
      dispatch({
        type: "TOGGLE",
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
