import { connect, useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { Component } from "react";
import { DECREMENT, INCREASE, INCREMENT, TOGGLE_COUNTER } from "../store";

import { counterActions } from "../store";

// Function based approach
const Counter = () => {
  const dispatch = useDispatch();
  // when we have single slice
  // const counter = useSelector((state) => state.counter);
  // const show = useSelector((state) => state.showCounter);

  // when we have multiple slice we need to the name that we given while cobnfiguring the store
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    // using redux
    // dispatch({ type: TOGGLE_COUNTER });

    // using redux toolkit
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    // using redux
    // dispatch({ type: INCREMENT });

    // using redux toolkit
    dispatch(counterActions.increment())
  };

  const decrementHandler = () => {
     // using redux
    // dispatch({ type: DECREMENT });

    // using redux toolkit
    dispatch(counterActions.decrement())
  };

  const incrementByValueHandler = () => {
    // using redux
    // dispatch({ type: INCREASE, value: 5 });

    // using redux toolkit
    dispatch(counterActions.increase(5))
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByValueHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// Class based approach
// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- {this.props.counter} --</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// with this method state will be available as props in the class based component
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// with this method dispatch events will be available as props in the class based component
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' }),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
