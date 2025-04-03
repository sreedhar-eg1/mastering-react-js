import { createSlice } from "@reduxjs/toolkit"

const INITIAL_COUNTER_STATE = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: INITIAL_COUNTER_STATE,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            // all additional data can be fetched by payload, we cant use our own name
            state.counter += action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

export default counterSlice