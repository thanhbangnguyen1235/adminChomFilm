import React, { Component } from "react";
import Dashboard from "./pages/dashboard/index";
import './layout.css'
import FilmPage from './pages/Film';
import UserPage from './pages/User'
import { Route, HashRouter, Switch, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/film" component={FilmPage}></Route>
          <Route path="/user" component={UserPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
