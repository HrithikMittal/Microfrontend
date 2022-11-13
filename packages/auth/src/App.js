import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            {/* <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} /> */}
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
