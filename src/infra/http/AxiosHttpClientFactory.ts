import store, { alocateRequests } from '@/data/store';
import Axios from 'axios';
import AxiosLanguageInterceptor from './AxiosLanguageInterceptor';
import {
  errorReceiver,
  successReceiver,
} from './state/AxiosHTTPClientFactorySlice';

export default function makeAxiosHttpClient() {
  const baseURL = process.env.REACT_APP_SERVER_URI;
  const axios = Axios.create({ baseURL, withCredentials: false });

  axios.interceptors.request.use(AxiosLanguageInterceptor);
  axios.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal, no-throw-literal
      throw error.response?.data;
    }
  );
  return axios;
}
