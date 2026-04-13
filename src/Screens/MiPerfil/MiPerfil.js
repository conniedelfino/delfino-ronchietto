import React from "react";

class MiPerfil extends Component{
  //Aquí iría tu constructor y otros métodos del ciclo de vida
  
  logout(){
    cookies.remove('user-auth-cookie')
    // Aqui iría alguna redirección al login, o la home
  }
  //Aquí estaría tu método render
}
