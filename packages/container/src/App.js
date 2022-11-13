import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/marketingApp"));
const AuthLazy = lazy(() => import("./components/authApp"));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
export default App;
