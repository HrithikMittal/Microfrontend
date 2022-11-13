import React from "react";
import Header from "./components/Header";
import MarketingApp from "./components/marketingApp";
import AuthApp from "./components/authApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp} />
          <Route path="/" component={MarketingApp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
