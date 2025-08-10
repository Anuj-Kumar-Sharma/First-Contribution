import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slice/index"

const store = configureStore({
    reducer : {
        movie : moviesReducer
    }
})

export default store;