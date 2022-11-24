import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
    loading: false,
    users: [],
    error: '',
}

export const fetchUsers = createAsyncThunk("users/fetchUsers",async()=>{
    const response = await axios.get(USERS_URL)
    return response.data
})

export const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})
export default userSlice.reducer