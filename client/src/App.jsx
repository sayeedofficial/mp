import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import Try from "./Components/Try/Try";
const App = () => (
  <Fragment>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/try" element={<Try />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  </Fragment>
);

export default App;
