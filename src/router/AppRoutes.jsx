import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Listing from "../pages/Listing";

export default function appRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Listing />}></Route>
      <Route path="/about" exact element={<About />}></Route>
    </Routes>
  );
}
