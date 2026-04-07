import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./screens/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
 
return (
  <div className="container">
    <Header />

    <Switch>
      <Route path="/" exact={true} component={Home} />

      {/* hay que cambiar element x component
      <Route path="/" element={<Peliculas />} />
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Register />} />
      <Route path="/" element={<Series />} />
      <Route path="/" element={<Favoritas />} />
       */}
      
    </Switch>

    <Footer />
  </div>
);
}

export default App;