import { AxiosError } from 'axios';

export interface AxiosErr extends AxiosError {
  isWarning: boolean;
}
