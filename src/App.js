import React from "react";
import "./app.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Survey from "./components/survey/survey";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
