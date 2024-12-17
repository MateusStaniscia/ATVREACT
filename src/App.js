import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import History from "./pages/History.js";
import Gallery from "./pages/Gallery.js";
import Contact from "./pages/Contact.js";
import "./App.js";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
