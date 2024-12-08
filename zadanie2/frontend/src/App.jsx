// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import TeamSection from "./components/TeamSection";
import Home from "./components/Home";
import RegistrationForm from "./components/RegistrationForm";
import GdprTerms from "./components/GdprTerms";
import Navbar from "./components/Navbar";
import ZmenySection from "./components/ZmenySection";

function App() {
  return (
    <div className="App bg-black min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zaluby" element={<TeamSection />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/GDPR" element={<GdprTerms />} />
        <Route path="/zmeny" element={<ZmenySection />} />
        
      </Routes>
    </div>
  );
}

export default App;
