import React from "react";
import axios from 'axios'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './SignIn.css'

// CONEXÃO COM API
const api = axios.create({
    baseURL: 'http://localhost:8000'
})
//

function SignIn() {

    const navigate = useNavigate()

    // Visibilidade do password icon
    const [isVisible, setIsVisible] = useState(false)
    function toggleVisibility() {
        setIsVisible(!isVisible)
    }
    //

    // Métodos para fazer Login
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    // Para registrar as mudanças no inputEmail e inputPassword
    const handleInputEmail = (event) => {
        setInputEmail(event.target.value)
    }
    const handleInputPassword = (event) => {
        setInputPassword(event.target.value)
    }
    //

    // Função para fazer login
    const loginUser = () => {

        api.post('/loginUser', {
            email: inputEmail,
            password: inputPassword
        })
            .then(response => {
                console.log(response)
                navigate('/homepage')
            })
            .catch(error => {
                console.log(error.response?.data || error.message)
            })
    }

    return (
        <div className="general-div-signin">
            <p className="entrar">Entrar</p>

            <div className="input-divs-signin">

                <div className="div-input-email">
                    <span className="span-icon-user"><i className="fa-regular fa-user" /></span>
                    <input className="input-email" type="text" placeholder="Email" value={inputEmail} onChange={handleInputEmail} />
                </div>

                <div className="div-input-password">
                    <span className="span-icon-password"><i className="fa-solid fa-lock" /></span>

                    <input className="input-password" type={isVisible ? "text" : "password"} placeholder="Senha" value={inputPassword} onChange={handleInputPassword}/>
                    <i className={`fa-solid ${isVisible ? "fa-eye" : "fa-eye-slash"}`} onClick={toggleVisibility} />
                </div>

            </div>

            {/* Link Forget-Password */}
            <Link className="forgot-password" to={"/forgetpass"}>Esqueci Senha</Link>
            {/* Fim Link Forget-Password */}

            <div className="extra-buttons-signin">
                <button className="signup-button" onClick={() => navigate("/signup")}>Cadastre-se</button>

                {/* AQUI SERÁ UMA FUNÇÃO CONECTADA COM A API PARA LOGIN DE USUÁRIOS*/}

                {/* Button to Login */}
                <button onClick={loginUser} className="login-button">Faça Login</button> 
                {/* END Button to Login */}
                
            </div>
        </div>
    )
}

export default SignIn