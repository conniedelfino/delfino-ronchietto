import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import Cookies from "universal-cookie"

const cookies = new Cookies()

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            redirect: false
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
                error: "algo esta incorrecto"
            });
            return;
        }

        let usersParseado = JSON.parse(usersStorage);

        let usersFiltrado = usersParseado.filter((user)=> user.email === this.state.email);

        if (usersFiltrado.lenght === 0){
            this.setState({
                error: "algo esta incorrecto"
            });
            return;
        }

        if (usersFiltrado[0].password !== this.state.password){
            this.setState({
                error: "algo esta incorrecto"
            });
            return;
        }

        cookies.set("auth-user", this.state.email, {path: "/"});

        this.setState({
            redirect: true,
            error: ""
        });
    }

    render(){
        if (this.state.redirect){
            return <Redirect to="/" />
        }

        return(
            <section className="container my-4">
                <h2>Login</h2>

                <form onSubmit={(event) => this.submitForm(event)}>
                    <div>
                        <label>email</label>
                        <input type="text" name="email" value="this.state.email" onChange={(e)=> this.guardarValor(event)} />
                    </div>

                    <div>
                        <label>password</label>
                        <input type="password" name="password" value="this.state.password" onChange={(e)=> this.guardarValor(event)} />
                    </div>

                    <button type="submit">ingresar</button>

                    {this.state.error !== ""? <p>{this.state.error}</p>: null}

                </form>
            </section>
        );
    }

}

export default Login;
