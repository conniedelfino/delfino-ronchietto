import React, { Component } from "react";
import Cookies from "universal-cookie"

const cookies = new Cookies()

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
        };
    }

    guardarValor(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitForm(event){
        event.preventDefault();
        let usersStorage = localStorage.getItem("users");

        if (usersStorage === null){
            this.setState({
                error: "Credenciales incorrectas"
            });
            return;
        }

        let usersParseado = JSON.parse(usersStorage);

        let usersFiltrado = usersParseado.filter((user)=> user.email === this.state.email);

        if (usersFiltrado.length === 0){
            this.setState({
                error: "Credenciales incorrectas"
            });
            return;
        }

        if (usersFiltrado[0].password !== this.state.password){
            this.setState({
                error: "Credenciales incorrectas"
            });
            return;
        }

        cookies.set("auth-user", this.state.email, {path: "/"});

        this.props.history.push("/");
    }

    render(){
        return(
            <section className="container my-4">
                <h2>Login</h2>

                <form onSubmit={(event) => this.submitForm(event)}>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" value={this.state.email} placeholder="Ingresa aca tu email" onChange={(event)=> this.guardarValor(event)} />
                    </div>

                    <div>
                        <label>Contraseña</label>
                        <input type="password" name="password" value={this.state.password} placeholder="Ingresa aca tu contraseña" onChange={(event)=> this.guardarValor(event)} />
                    </div>

                    <button type="submit">Ingresar a mi cuenta</button>

                    {this.state.error !== ""? <p>{this.state.error}</p>: null}

                </form>
            </section>
        );
    }

}

export default Login;
