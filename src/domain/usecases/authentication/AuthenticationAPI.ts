import { AuthSignInModel } from '@/domain/models/pages/authentication/sign-in/SignInModel';
import makeAxiosHttpClient from '@/infra/http/AxiosHttpClientFactory';

const httpClient = makeAxiosHttpClient();
const USERS_URL = '/users/public';
const PROVIDERS_URL = '/providers';
const INSIGHTS_URL = '/location-insights-v2';
const AUTH_BASE_URL = '/auth/users/public';

export async function auth(params: AuthSignInModel): Promise<any> {
  return httpClient.post(`${AUTH_BASE_URL}/sign-in`, params);
}

export async function tokenRefresher(refreshToken: string): Promise<any> {
  return httpClient.post(`${AUTH_BASE_URL}/refresh`, {
    refresh_token: refreshToken,
  });
}

export async function getUserInfoWithToken(idToken: string): Promise<any> {
  return httpClient.get(`${INSIGHTS_URL}/user-info`, {
    headers: { Authorization: idToken },
  });
}

export async function getApiKeyWithToken(idToken: string): Promise<any> {
  return httpClient.get(`${PROVIDERS_URL}/api-key`, {
    headers: { Authorization: idToken },
  });
}
