/* eslint-disable @typescript-eslint/no-use-before-define */
import L10n from '@/data/l10n/L10n';
import store, { RootState } from '@/data/store';
import { AuthSignInModel } from '@/domain/models';
import { AuthenticationAPI } from '@/domain/usecases';
import history from '@/main/routes/history/history';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { emailValidator } from '@/data/validation/validators/email/EmailValidator';
import { minLengthValidator } from '@/data/validation/validators/min-length/MinLengthValidator';
import { ISessionCredentials, State } from './AuthFormSlice.types';
// eslint-disable-next-line import/no-cycle
import { validateFields } from './AuthFormSlice';

export const signin = createAsyncThunk(
  'auth-form/signin',
  async (
    signInData: AuthSignInModel,
    thunkAPI
  ): Promise<any> => {
    thunkAPI.dispatch(validateFields());

    const state = thunkAPI.getState() as RootState;

  }
);

export const revalidateCredentials = createAsyncThunk(
  'auth-form/revalidateCredentials',
  async (tokenToRefresh: string, thunkAPI): Promise<any> => {
    const refreshedToken = await thunkAPI.dispatch(
      refreshToken(tokenToRefresh)
    );

    storeSessionCredentials({
      tokenName: refreshedToken.payload?.data?.IdToken,
      refreshToken: tokenToRefresh,
    });

    return refreshedToken;
  }
);

export const auth = createAsyncThunk(
  'auth-form/auth',
  async (signInData: AuthSignInModel): Promise<any> => {
    const authResponse = await AuthenticationAPI.auth(signInData);
    return authResponse;
  }
);

export const refreshToken = createAsyncThunk(
  'auth-form/refreshToken',
  async (tokenToRefresh: string): Promise<any> => {
    const refreshedToken = await AuthenticationAPI.tokenRefresher(
      tokenToRefresh
    );
    return refreshedToken;
  }
);

export const getUserInfo = createAsyncThunk(
  'auth-form/getUserInfo',
  async (idToken: string): Promise<any> => {
    const userInfo = await AuthenticationAPI.getUserInfoWithToken(idToken);
    return userInfo;
  }
);

export const getApiKey = createAsyncThunk(
  'auth-form/getUserInfo',
  async (idToken: string): Promise<any> => {
    const apiKey = await AuthenticationAPI.getApiKeyWithToken(idToken);
    return apiKey;
  }
);

const storeSessionCredentials = (credentials: Record<string, any>) => {
  const keyValuePair = Object.entries(credentials);

  keyValuePair.forEach(([key, value]) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  });
};

export const removeStoredSession = (item: string) => {
  sessionStorage.removeItem(item);
};

export const validateAuthFields = (state: State) => {
  const { email } = state.data;
  const { password } = state.data;

  const emailValidation = emailValidator(String(email));
  const passwordValidation = minLengthValidator(String(password), 4);

  if (!emailValidation) {
    state.dataValidation.email = {
      errors: L10n.formatMessage({ id: 'sign.in.input.invalid.email' }),
    };
    state.dataValidation.validated = false;
  } else {
    state.dataValidation.email = { errors: '' };
  }

  if (!passwordValidation) {
    state.dataValidation.password = {
      errors: L10n.formatMessage({ id: 'sign.in.input.invalid.password' }),
    };
    state.dataValidation.validated = false;
  } else {
    state.dataValidation.password = { errors: '' };
  }

  if (emailValidation && passwordValidation) {
    state.dataValidation.validated = true;
  }
};
