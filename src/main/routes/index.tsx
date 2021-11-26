import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  useEffect,
  Fragment,
} from "react";
import { useIntl } from "react-intl";
import {
  Route,
  Routes as Switch,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { SignIn } from "@/presentation/pages/authentication";
import L10n from "@/data/l10n/L10n";
import { selectRefreshTokenRequestState } from "@/presentation/pages/authentication/sign-in/state/AuthFormSlice";
import { useSelector } from "react-redux";
import { RequestState } from "@/presentation/pages/authentication/sign-in/state/AuthFormSlice.types";
import { dispatchAlocateRequests, useAppDispatch } from "@/data/store";

const HomeRedir = (
  <Route
    path='/'
    element={
      <Navigate replace to={L10n.formatMessage({ id: "routes.sign.in" })} />
    }
  />
);

const Routes: FC = (): RE => {
  const intl = useIntl();
  const requestState = useSelector(selectRefreshTokenRequestState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (requestState === RequestState.FULFILLED)
      setTimeout(() => {
        dispatchAlocateRequests(dispatch);
      }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestState]);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/secundary'
          element={<div>Secundary</div>}
        />
        <Route
          path='/'
          element={<div>Home</div>}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
