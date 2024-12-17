import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contato from "./components/Contatos";
import Galeria from "./components/Galeria";
import Historia from "./components/History";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

