import { createSlice } from "@reduxjs/toolkit"

const INITIAL_AUTH_STATE = { isLoggedIn: false };

const authSlice = createSlice({
    name: "authentication",
    initialState: INITIAL_AUTH_STATE,
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        }
    }
})

export default authSlice