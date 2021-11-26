import { useAppDispatch } from '@/data/store';
import Button from '@/presentation/components/button/Button';
import useWindowSize from '@/presentation/hooks/useWindowSize/useWindowSize';
import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  useState,
  useEffect,
} from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { AuthSignInModel } from '@/domain/models';
import { buttonStyles, StyledForm, ErrorLabel } from './AuthForm.styles';
import FormItem from './form-item/AuthFormItem';
import {
  selectAuthFormData,
  selectAuthFormRequestState,
  selectAuthFormDataValidation,
  onChangeEmail,
  onChangePassword,
  selectUserInfoRequestState,
} from '../../state/AuthFormSlice';
import { RequestState } from '../../state/AuthFormSlice.types';
import { signin } from '../../state/AuthForm.actions';

const AuthForm: FC = (): RE => {
  const intl = useIntl();

  const dispatch = useAppDispatch();
  const { email, password } = useSelector(selectAuthFormData);
  const { emailErrors, passwordErrors } = useSelector(
    selectAuthFormDataValidation
  );
  const signInRequest = useSelector(selectAuthFormRequestState);
  const userInfoRequest = useSelector(selectUserInfoRequestState);

  const { width } = useWindowSize();
  const isMobile = width < 1076;

  const [error, setError] = useState(false);
  const [errorUserInfo, setErrorUserInfo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signin({ email, password } as AuthSignInModel));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(onChangeEmail(value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(onChangePassword(value));
  };

  useEffect(() => {
    if (signInRequest === RequestState.REJECTED) setError(true);
    if (userInfoRequest === RequestState.REJECTED) setErrorUserInfo(true);
  }, [signInRequest, userInfoRequest]);

  return (
    <StyledForm
      isMobile={isMobile}
      width={width}
      name={intl.formatMessage({ id: 'sign.in.form.name' })}
      onSubmit={handleSubmit}
    >
      <FormItem
        labelName={intl.formatMessage({ id: 'sign.in.input.label.email' })}
        inputName={intl.formatMessage({ id: 'sign.in.input.name.email' })}
        itemType="text"
        placeholder={intl.formatMessage({
          id: 'sign.in.input.placeholder.email',
        })}
        inputValue={email}
        onChangeInput={handleEmailChange}
        errors={emailErrors}
      />
      <FormItem
        labelName={intl.formatMessage({ id: 'sign.in.input.label.password' })}
        inputName={intl.formatMessage({ id: 'sign.in.input.name.password' })}
        itemType="password"
        placeholder={intl.formatMessage({
          id: 'sign.in.input.placeholder.password',
        })}
        inputValue={password}
        onChangeInput={handlePasswordChange}
        errors={passwordErrors}
      />
      {error && (
        <ErrorLabel>
          {intl.formatMessage({ id: 'sign.in.input.wrong.password' })}
        </ErrorLabel>
      )}
      {errorUserInfo && (
        <ErrorLabel>
          {intl.formatMessage({ id: 'sign.in.input.wrong.access' })}
        </ErrorLabel>
      )}
      <Button
        type="submit"
        styles={buttonStyles}
        disabled={signInRequest === RequestState.PENDING}
      >
        {intl.formatMessage({ id: 'sign.in.submit' })}
      </Button>
    </StyledForm>
  );
};

export default AuthForm;
