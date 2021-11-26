import React, { FunctionComponent as FC, ReactElement as RE } from "react";
import { Provider } from "react-redux";
import store from "./data/store";
import IntlProvider from "./data/l10n/IntlProvider";
import Routes from "./main/routes";

const App: FC = (): RE => {
  return (
    <Provider store={store}>
      <IntlProvider>
        <Routes />
      </IntlProvider>
    </Provider>
  );
};

export default App;
