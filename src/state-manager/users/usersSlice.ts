import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { userData } from './interfaces';

import { getUsers } from './users.api';



export interface usersState {
    users: userData[];
    status: 'idle' | 'loading' | 'failed';

}


const initialState: usersState = {
    users: [],
    status: 'idle'
}



export const getUsersAsync = createAsyncThunk(
    'users/getUsers',
    async () => {
        const response = await getUsers();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const reportSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
    ,
    extraReducers: (builder) => {
        builder
            .addCase(getUsersAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUsersAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.users = action.payload;
            })
            .addCase(getUsersAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

export const selectUsers = (state: RootState) => state.users.users;


export default reportSlice.reducer;
