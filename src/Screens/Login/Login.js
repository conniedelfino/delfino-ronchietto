import { Component } from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
class MiFuncion extends Component {
    

}

class Login extends Component{
    onSubmit(email, password){
        if (user){
            cookies.set("user-auth-cookie", user.email)
        }
    }
}