import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Screens/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
 
return (
  <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />

      {/* 
      <Route path="/" element={<Peliculas />} />
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Register />} />
      <Route path="/" element={<Series />} />
      <Route path="/" element={<Favoritas />} />
       */}
      


    </Routes>

    <Footer />
  </>
);
}

export default App;