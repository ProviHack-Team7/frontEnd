import { getLocale } from '@/data/l10n/L10nHelper';
import { AxiosRequestConfig } from 'axios';

export default async function AxiosLanguageInterceptor(
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> {
  if (config.headers) {
    config.headers['Accept-Language'] = getLocale();
  }
  return config;
}
