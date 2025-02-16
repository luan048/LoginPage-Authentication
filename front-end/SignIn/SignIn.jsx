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

    const [isVisible, setIsVisible] = useState(false)

    function toggleVisibility() {
        setIsVisible(!isVisible)
    }

    return (
        <div className="general-div-signin">
            <p className="entrar">Entrar</p>

            <div className="input-divs-signin">

                <div className="div-input-email">
                    <span className="span-icon-user"><i className="fa-regular fa-user" /></span><input className="input-email" type="text" placeholder="Email" />
                </div>

                <div className="div-input-password">
                    <span className="span-icon-password"><i className="fa-solid fa-lock" /></span>

                    <input className="input-password" type={isVisible ? "text" : "password"} placeholder="Senha" />
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
                <button className="login-button">Faça Login</button> {/* AINDA SEM FUNCIONALIDADES */}
                {/* END Button to Login */}
                
            </div>
        </div>
    )
}

export default SignIn