import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Header from "components/Header";
import Home from "pages/Home";
import Shop from "pages/Shop";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </>
  );
};

export default App;
