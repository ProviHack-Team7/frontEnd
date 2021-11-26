import L10n from '@/data/l10n/L10n';
import store, { alocateRequests, RootState } from '@/data/store';
import history from '@/main/routes/history/history';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import {
  signin,
  validateAuthFields,
  removeStoredSession,
  revalidateCredentials,
  getUserInfo,
} from './AuthForm.actions';
import {
  ISessionCredentials,
  RequestState,
  State,
} from './AuthFormSlice.types';

const initialState: State = {
  data: {
    email: '',
    password: '',
  },
  dataValidation: {
    validated: true,
    email: {},
    password: {},
  },
  requestState: RequestState.INITIAL,
  refreshTokenRequestState: RequestState.INITIAL,
  sessionCredentials: {} as ISessionCredentials,
  userInfoRequestState: RequestState.INITIAL,
};

export const FormSlice = createSlice({
  name: 'auth-form',

  initialState,

  reducers: {
    onChangeEmail: (state, action: PayloadAction<string>) => {
      const email = action.payload;

      state.data.email = email;
    },
    onChangePassword: (state, action: PayloadAction<string>) => {
      const password = action.payload;

      state.data.password = password;
    },
    validateFields: (state) => {
      validateAuthFields(state);
    },

    logout: () => {
      const sessionCredentials = [
        'refreshToken',
        'credentialName',
        'capabilities',
        'tokenName',
        'apiKeyName',
      ];
      sessionCredentials.forEach((item) => {
        removeStoredSession(item);
      });
      history.push(L10n.formatMessage({ id: 'routes.sign.in' }));
      document.location.reload();
    },

    updateCredentials: (state) => {
      const sessionCredentials = {
        refreshToken: JSON.parse(sessionStorage.getItem('refreshToken') || ''),
        credentialName: JSON.parse(
          sessionStorage.getItem('credentialName') || ''
        ),
        capabilities: JSON.parse(sessionStorage.getItem('capabilities') || ''),
        tokenName: JSON.parse(sessionStorage.getItem('tokenName') || ''),
        apiKeyName: JSON.parse(sessionStorage.getItem('apiKeyName') || ''),
      };
      state.sessionCredentials = sessionCredentials;
    },
    resetRefreshTokenRequestState: (state) => {
      state.refreshTokenRequestState = RequestState.INITIAL;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state) => {
      state.requestState = RequestState.PENDING;
    });
    builder.addCase(
      signin.fulfilled,
      (state: State, action: PayloadAction<ISessionCredentials>) => {
        state.sessionCredentials = action.payload;
        state.requestState = RequestState.FULFILLED;
      }
    );
    builder.addCase(signin.rejected, (state) => {
      state.requestState = RequestState.REJECTED;
    });

    builder.addCase(revalidateCredentials.pending, (state) => {
      state.refreshTokenRequestState = RequestState.PENDING;
    });
    builder.addCase(
      revalidateCredentials.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.sessionCredentials.tokenName =
          action.payload?.payload.data?.IdToken;
        alocateRequests.forEach((aloc) => {
          aloc.params.token = action.payload?.payload.data?.IdToken;
        });
        state.refreshTokenRequestState = RequestState.FULFILLED;
      }
    );
    builder.addCase(revalidateCredentials.rejected, (state) => {
      state.refreshTokenRequestState = RequestState.REJECTED;
    });

    builder.addCase(getUserInfo.pending, (state) => {
      state.userInfoRequestState = RequestState.PENDING;
    });
    builder.addCase(getUserInfo.fulfilled, (state) => {
      state.userInfoRequestState = RequestState.FULFILLED;
    });
    builder.addCase(getUserInfo.rejected, (state) => {
      state.userInfoRequestState = RequestState.REJECTED;
    });
  },
});

export const {
  onChangeEmail,
  onChangePassword,
  validateFields,
  logout,
  updateCredentials,
  resetRefreshTokenRequestState,
} = FormSlice.actions;

export default FormSlice.reducer;

export const selectAuthFormData = (state: RootState) => state.authForm.data;
export const selectAuthFormRequestState = (state: RootState) =>
  state.authForm.requestState;
export const selectAuthFormDataValidation = (state: RootState) => {
  const { email, password, validated } = state.authForm.dataValidation;
  const emailErrors = email?.errors;
  const passwordErrors = password?.errors;

  return { emailErrors, passwordErrors, validated };
};
export const selectSessionCredentials = (state: RootState) =>
  state.authForm.sessionCredentials;

export const selectRefreshTokenRequestState = (state: RootState) =>
  state.authForm.refreshTokenRequestState;

export const selectUserInfoRequestState = (state: RootState) =>
  state.authForm.userInfoRequestState;
