import React, { Component } from "react";
import Dashboard from "./pages/dashboard/index";
import './layout.css'
import FilmPage from './pages/Film';
import UserPage from './pages/User'
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/film" element={<FilmPage />}></Route>
          <Route exact path="/user" element={<UserPage />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
