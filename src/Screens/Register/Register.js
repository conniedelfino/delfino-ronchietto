import React, {Component} from "react";
import {Redirect} from "react-router-dom";

class Register extends Component {
    constructor (props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            redirect: false
        };
    }

    evitarSubmit(event){
        event.preventDefault();
    }

    guardarValor(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm(event){
        event.preventdefault();
        let crearUsuario = {
            email: this.state.email,
            password: this.state.password,
            creado: Date.now()
        };

        if (this.state.password.length < 6){
            this.setState({
                error: "La contraseña debe tener al menos 6 caracteres"
            });
            return;
        }

        let usersStorage = localStorage.getItem("users");

        if (usersStorage !== null){
            let usersParseado = JSON.parse(usersStorage);
            let usersFiltrado = usersParseado.filter((user)=> user.email === this.state.email);

            if (usersFiltrado.lenght > 0){
                this.setState({
                    error: "Ya existe un usuario con ese email"
                });
                return;
            }

            usersParseado.push(crearUsuario);

            let usersEnJson = JSON.stringify(usersParseado);
            localStorage.setItem("users", usersEnJson);

            this.setState({
                redirect: true,
                error:""
            });
        }else{
            let usersInicial = [crearUsuario];
            let usersEnJson = JSON.stringify(usersInicial);
            localStorage.setItem("users", usersEnJson);

            this.setState({
                redirect: true,
                error:""
            });

        }
    }

    render(){
        if (this.state.redirect){
            return <Redirect to="/login" />;
        }

        return(
            <section className="container my-4">
                <h2>Crear cuenta</h2>

                <from onSubmit={(event)=> this.submitForm(event)}>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" value={this.state.email} placeholder="Ingresa aca tu email" onChange={(event)=> this.guardarValor(event)} />
                    </div>

                    <div>
                        <label>Contraseña</label>
                        <input type="password" name="password" value={this.state.password} placeholder="Ingresa aca tu contraseña" onChange={(event)=> this.guardarValor(event)} />
                    </div>

                    <button type="submit">Crear cuenta nueva</button>
                    {this.state.error !== "" ? <p>{this.state.error}</p> : null}
                </from>

            </section>
        );
    }
}



export default Register;
