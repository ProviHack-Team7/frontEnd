import { RootState } from '@/data/store';
import { AxiosErr } from '@/domain/models/axios/AxiosModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  data: {
    requestError: {} as AxiosErr,
    successMessage: '',
  },
};

export const AxiosHTTPClientFactorySlice = createSlice({
  name: 'AxiosHTTPClientFactory',
  initialState,
  reducers: {
    errorReceiver: (state, action: PayloadAction<AxiosErr>) => {
      state.data.requestError = action.payload;
    },
    successReceiver: (state, action: PayloadAction<string>) => {
      state.data.successMessage = action.payload;
    },
  },
  extraReducers: () => {},
});

export default AxiosHTTPClientFactorySlice.reducer;

export const { errorReceiver, successReceiver } =
  AxiosHTTPClientFactorySlice.actions;

export const selectAxiosHTTPClientFactorySliceData = (state: RootState) =>
  state.axiosClient;

export const selectAxiosRequestError = (state: RootState) =>
  state.axiosClient.data.requestError;

export const selectAxiosRequestSuccess = (state: RootState) =>
  state.axiosClient.data.successMessage;
