import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { createMemoryHistory } from "history";
import IntlProvider from "@/data/l10n/IntlProvider";
import store from "@/data/store";

type Props = {
  children: React.ReactElement | React.ReactElement[];
  // eslint-disable-next-line react/require-default-props
  initialEntries?: string[];
};

export default function MockPage({
  children,
  initialEntries = ["/app"],
}: Props) {
  const history = createMemoryHistory({ initialEntries });

  return (
    <Provider store={store}>
      <IntlProvider>
        {/* <Routes>
          <Route path='/'>
            <span>home mock</span>
          </Route>
          <Route path='/app'>{children}</Route>
        </Routes> */}
      </IntlProvider>
    </Provider>
  );
}
