import React from "react";
import "./App.css";

import { Switch, Route } from 'react-router-dom';

import Home from "pages/Home";
import Shop from "pages/Shop";

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/shop' component={Shop} />
    </Switch>
  )
};

export default App;
