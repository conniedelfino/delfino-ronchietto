import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Series from "./Screens/Series/Series";
import Register from "./Screens/Register/Register";
import Peliculas from "./Screens/Peliculas/Peliculas";
import MovieDetails from "./Screens/DetallesPelis/DetallesPelis";
import SeriesDetails from "./Screens/DetallesSeries/DetallesSeries";
import Login from "./Screens/Login/Login"

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/series" component={Series} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/register" component={Register} />
        <Route path="/pelicula/:id" component={MovieDetails} />
        <Route path="/serie/:id" component={SeriesDetails} />
        <Route path="/login" component={Login}/>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;