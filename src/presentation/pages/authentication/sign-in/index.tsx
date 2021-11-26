import { FormExternalContainer } from "@/presentation/components/form/Form.styles";
import useWindowSize from "@/presentation/hooks/useWindowSize/useWindowSize";
import React, { FunctionComponent as FC, ReactElement as RE } from "react";
import Text from "@/presentation/components/text/Text";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import {
  AuthContainer,
  AuthImageContainer,
  subtitleStyles,
  LogoImgContainer,
} from "./index.styles";
import AuthForm from "./components/sign-in-form/AuthForm";
import { RequestState } from "./state/AuthFormSlice.types";
import { selectAuthFormRequestState } from "./state/AuthFormSlice";

const SignIn: FC = (): RE => {
  const { width } = useWindowSize();
  const isMobile = width < 1076;
  const signInRequest = useSelector(selectAuthFormRequestState);

  const intl = useIntl();
  const { Subtitle } = Text;

  return (
    <AuthContainer>
      <FormExternalContainer>
        <LogoImgContainer isMobile={isMobile} width={width}>
          <img alt='EEMovel-logo' src='' />
        </LogoImgContainer>
        <Subtitle styles={subtitleStyles(width, isMobile)}>
          {intl.formatMessage({ id: "sign.in.subtitle" })}
        </Subtitle>
        <AuthForm />
      </FormExternalContainer>
    </AuthContainer>
  );
};

export default SignIn;
