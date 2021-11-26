import { useAppDispatch } from '@/data/store';
import {
  selectSessionCredentials,
  updateCredentials,
} from '@/presentation/pages/authentication/sign-in/state/AuthFormSlice';

import { useSelector } from 'react-redux';

export default function useAuth() {
  const dispatch = useAppDispatch();
  const sessionCredentials = useSelector(selectSessionCredentials);

  if (sessionCredentials.credentialName === undefined) {
    dispatch(updateCredentials());
  }

  return sessionCredentials;
}
