import React from "react";
import Header from "./components/Header";
import MarketingApp from "./components/marketingApp";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </div>
  );
};
export default App;
