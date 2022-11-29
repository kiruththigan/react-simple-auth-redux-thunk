import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLorem = createAsyncThunk("lorem/getData", async (arg) => {
    try {
        const { data } = await axios.get(
            "https://baconipsum.com/api/?type=meat-and-filler"
        );
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
})

const loremSlice = createSlice({
    name: "lorem",
    initialState: {
        data: [],
        isSuccess: false,
        message: '',
        loadng: false,
    },
    reducers: {},
    extraReducers: {
        [getLorem.pending]: (state, { payload }) => {
            state.loadng = true
        },
        [getLorem.fulfilled]: (state, { payload }) => {
            state.loadng = false
            state.data = payload
            state.isSuccess = true
        },
        [getLorem.rejected]: (state, { payload }) => {
            state.message = payload
            state.loadng = false
            state.isSuccess = false
        },
    },
})

export default loremSlice