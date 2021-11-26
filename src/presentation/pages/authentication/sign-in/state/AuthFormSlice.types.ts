export enum RequestState {
  INITIAL = 'initial',
  FULFILLED = 'fulfilled',
  PENDING = 'pending',
  REJECTED = 'rejected',
}

interface IData {
  email?: string;
  password?: string;
}

export interface State {
  data: IData;
  dataValidation: {
    validated: boolean;
    email?: {
      errors?: string;
    };
    password?: {
      errors?: string;
    };
  };
  requestState: RequestState;
  refreshTokenRequestState: RequestState;
  sessionCredentials: ISessionCredentials;
  userInfoRequestState: RequestState;
}

export interface ISessionCredentials {
  refreshToken: any;
  credentialName: any;
  capabilities: any;
  tokenName: any;
  apiKeyName: any;
}
