import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Modal from "./Modal";
import RandomLetter from "./RandomLetter";
import ScreenLose from "./ScreenLose";
import ScreenWin from "./ScreenWin";

const routes = () => {
   return(
    <Router>
      <Routes >
          <Route element = { <Modal/> }  path="/" exact />
          <Route element = { <RandomLetter/> }  path="/play" />
          <Route element = { <ScreenLose/> }  path="/lose" />
          <Route element = { <ScreenWin/> }  path="/win" />
      </Routes>
    </Router>
  )
}

export default routes;