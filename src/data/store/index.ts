import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import L10nSlice from '@/data/l10n/L10nSlice';
import FormSlice from '@/presentation/pages/authentication/sign-in/state/AuthFormSlice';
import AxiosHTTPClientFactorySlice from '@/infra/http/state/AxiosHTTPClientFactorySlice';

export const alocateRequests = [] as { func: any; params: any }[];
export const dispatchAlocateRequests = (dispatch: AppDispatch) => {
  const requestsToRedo = [...alocateRequests];
  requestsToRedo.forEach((req) => {
    dispatch(req.func(req.params));
    alocateRequests.shift();
  });
};

const store = configureStore({
  reducer: {
    l10n: L10nSlice,
    axiosClient: AxiosHTTPClientFactorySlice,

    authForm: FormSlice,
  },
});

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const launchDispatch = (
  dispatch: AppDispatch,
  funcToDispatch: any,
  params?: any
) => {
  alocateRequests.push({ func: funcToDispatch, params });
  dispatch(funcToDispatch(params));
};
export default store;
