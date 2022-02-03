import { configureStore } from "@reduxjs/toolkit";
import { reducer as rootReducer } from "./reducer";

const store = configureStore({
    reducer: rootReducer
})

export default store;