import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Collection from "./Pages/Collection";
import BottomBar from "./components/BottomBar";

const App = () => {
  return (
    <BrowserRouter>
      
      <Navbar />  

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        
      </Routes>

      <BottomBar/>
      <Footer />  
    </BrowserRouter>
  );
};

export default App;
