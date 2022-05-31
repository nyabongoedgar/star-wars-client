import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/** importing our pages */
import People from "./People";
import Person from "./Person";

export default function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/people" element={<Person />} />
      </Routes>
    </Router>
  );
}
