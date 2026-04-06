import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Screens/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
 
return (
  <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

    <Footer />
  </>
);
}

export default App;