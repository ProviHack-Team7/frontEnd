import L10n from "@/data/l10n/L10n";
import useAuth from "@/presentation/hooks/useAuth/useAuth";
import { SignIn } from "@/presentation/pages";
import React, { FunctionComponent as FC, ReactElement as RE } from "react";
import { RouteProps, Route } from "react-router-dom";

interface AuthRouteProps extends RouteProps {
  fallbackRoute?: React.ReactElement;
}

const SignInRoute = (
  <Route
    path={L10n.formatMessage({ id: "routes.sign.in" })}
    children={SignIn}
  />
);

const AuthRoute: FC<AuthRouteProps> = ({
  children,
  fallbackRoute = SignInRoute,
  ...rest
}: AuthRouteProps): RE => {
  if (!sessionStorage.getItem("tokenName")) {
    return (
      <Route
        path={L10n.formatMessage({ id: "routes.sign.in" })}
        children={SignIn}
      />
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const auth = useAuth();
  return (
    <Route
      path={L10n.formatMessage({ id: "routes.sign.in" })}
      children={SignIn}
    />
  );
};

export default AuthRoute;
