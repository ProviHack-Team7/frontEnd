import { SignIn } from '@/presentation/pages';
import ValidatorComposite from '@/data/validation/validator-composite/ValidatorComposite';
import { emailValidator } from '@/data/validation/validators/email/EmailValidator';
import { minLengthValidator } from '@/data/validation/validators/min-length/MinLengthValidator';
import React, { ReactElement as RE } from 'react';

const makeSignIn: CallableFunction = (): RE => {
  const validator = ValidatorComposite.build({
    email: emailValidator,
    password: minLengthValidator,
  });

  return <SignIn />;
};

export default makeSignIn;
