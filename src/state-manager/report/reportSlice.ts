import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { IProject, IGateway } from './interfaces/index';
import { getProjects, getGateways } from './report.api';

export interface ReportState {
    projectId: string;
    gatewayId: string;
    startDate: Date;
    endDate: Date;
    status: 'idle' | 'loading' | 'failed';
    projects: IProject[];
    gateways: IGateway[];
}


const initialState: ReportState = {
    projectId: '',
    gatewayId: '',
    startDate: new Date(),
    endDate: new Date(),
    status: 'idle',
    projects: [],
    gateways: [],
}


export const getProjectsAsync = createAsyncThunk(
    'report/getProjects',
    async () => {
        const response = await getProjects();
        console.log('the response is: ', response);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);
export const getGatewaysAsync = createAsyncThunk(
    'report/getGateways',
    async () => {
        const response = await getGateways();
        console.log('the response of gateways: ', response);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        setProjectId: (state, action: PayloadAction<string>) => {
            state.projectId = action.payload;
        },
        setGatewayId: (state, action: PayloadAction<string>) => {
            state.gatewayId = action.payload;
        },
        setStartDate: (state, action: PayloadAction<Date>) => {
            state.startDate = action.payload;
        },
        setEndDate: (state, action: PayloadAction<Date>) => {
            state.endDate = action.payload;
        }
    }
    ,
    extraReducers: (builder) => {
        builder
            .addCase(getProjectsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProjectsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.projects = action.payload;
            })
            .addCase(getProjectsAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(getGatewaysAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getGatewaysAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.gateways = action.payload;
            })
            .addCase(getGatewaysAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

export const { setProjectId, setGatewayId, setStartDate, setEndDate } = reportSlice.actions;

export const selectProjects = (state: RootState) => state.report.projects;
export const selectGateways = (state: RootState) => state.report.gateways;
export default reportSlice.reducer;

