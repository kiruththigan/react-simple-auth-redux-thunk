import authSlice from "./features/auth/authSlice";
import loremSlice from "./features/lorem/LoremSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        lorem: loremSlice.reducer,
        auth: authSlice.reducer
    },
})

export default store