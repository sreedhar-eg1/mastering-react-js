import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
import counterSlice from "./counter";
import authSlice from "./auth";


const INITIAL_COUNTER_STATE = { counter: 0, showCounter: true };
const INITIAL_AUTH_STATE = { isLoggedIn: false };

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const TOGGLE_COUNTER = "toggle_counter";
export const INCREASE = "increase";

// with redux
// const counterReducer = (state = INITIAL_STATE, action) => {
//   if (action.type === INCREMENT) {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === INCREASE) {
//     return {
//       ...state,
//       counter: state.counter + action.value,
//     };
//   }

//   if (action.type === DECREMENT) {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }

//   if (action.type === TOGGLE_COUNTER) {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;


// with redux toolkit
// const counterSlice = createSlice({
//     name: "counter",
//     initialState: INITIAL_COUNTER_STATE,
//     reducers: {
//         increment(state) {
//             state.counter++
//         },
//         decrement(state) {
//             state.counter--
//         },
//         increase(state, action) {
//             // all additional data can be fetched by payload, we cant use our own name
//             state.counter += action.payload
//         },
//         toggleCounter(state) {
//             state.showCounter = !state.showCounter
//         }
//     }
// })

// const authSlice = createSlice({
//     name: "authentication",
//     initialState: INITIAL_AUTH_STATE,
//     reducers: {
//         login(state) {
//             state.isLoggedIn = true
//         },
//         logout(state) {
//             state.isLoggedIn = false
//         }
//     }
// })

const store = configureStore({
    // with multiple reducer
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }

    // with single reducer
    // reducer: counterSlice.reducer
});

// with this we can get the unique key generated for each actions
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
