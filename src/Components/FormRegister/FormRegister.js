import React, { Fragment } from "react";

function FormRegister(){
    let usuarioACrear = 
    return(
        <React.Fragment>
            <form action="" method="get">
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" placeholder="Este es mi nombre de usario"></input>
                </div>

                <div>
                    <label>Email: </label>
                    <input type="email" name="emailUser" placeholder="ejemplo@gmail.com"></input>
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password" name="passwordUser" placeholder="contraseña"></input>
                </div>

                <button type="submit">Enviar</button>
            </form>

    
        </React.Fragment>
    )
}

export default FormRegister;