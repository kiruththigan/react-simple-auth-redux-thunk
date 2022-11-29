import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

export const authentication = createAsyncThunk('auth/authenticate', async (loginData) => {

    try {
        const { data } = await axios.post(
            'https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login',
            loginData,
            config
        )
        console.log(data)
        return data
    } catch (error) {
        console.log(error);
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isSuccess: false,
        loading: true,
        message: '',
        payload: '',
    },
    reducers: {},
    extraReducers: {
        [authentication.pending]: (state, { payload }) => {
            state.loading = true
        },
        [authentication.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.isSuccess = true
            state.message = payload.message
            state.payload = payload.payload
        },
        [authentication.rejected]: (state, { payload }) => {
            state.loading = false
            state.isSuccess = true
            state.message = payload.message
            state.payload = payload.payload
        },
    }
})

export default authSlice