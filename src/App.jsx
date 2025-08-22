import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Collection from "./Pages/Collection";

const App = () => {
  return (
    <BrowserRouter>
      
      <Navbar />  

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        
      </Routes>

      
      <Footer />  
    </BrowserRouter>
  );
};

export default App;
