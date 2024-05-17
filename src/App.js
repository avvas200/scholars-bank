import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Navbar/MainNavBar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="{*}" component={NotFound} />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/:username" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
