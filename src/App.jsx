import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import "./styles/custom.scss";
import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import HeaderComp from "./components/Header";

const App = () => {
  return (
    <div>
      <HeaderComp />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
