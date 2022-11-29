import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

export const authentication = createAsyncThunk('auth/authenticate', async (loginData) => {
    let data;
    try {
        await axios.post(
            'https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login',
            loginData,
            config
        ).then((res) => {
            data = res.data
        }).catch((error) => {
            data = error
        })

        return data
    } catch (error) {
        console.log(error.message);
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isSuccess: false,
        loading: false,
        message: '',
        payload: '',
    },
    reducers: {
        logout: (state, action) => {
            state.isSuccess=false
            state.loading=false
            state.message=''
            state.payload=''
        }
    },
    extraReducers: {
        [authentication.pending]: (state, { payload }) => {
            state.loading = true
        },
        [authentication.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.isSuccess = payload.message == 'success' ? true : false
            state.message = payload.message
            state.payload = state.isSuccess ? payload.payload : ""
        },
        [authentication.rejected]: (state, { payload }) => {
            state.loading = false
            state.isSuccess = true
            state.message = payload.message
            state.payload = ''
        },
    }
})

export const { logout } = authSlice.actions
export default authSlice