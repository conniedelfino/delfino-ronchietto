import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Screens/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Series from "./Screens/Series/Series";

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/series" component={Series} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;