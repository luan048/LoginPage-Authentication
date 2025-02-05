import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './SignIn.css'

function SignIn() {

    //PARA NEVEGAR ENTRE AS ROTAS
    const navigate = useNavigate()
    //

    const [isVisible, setIsVisible] = useState(false)

    function toggleVisibility() {
        setIsVisible(!isVisible)
    }

    return (
        <div className="general-div-signin">
            <p className="entrar">Entrar</p>

            <div className="input-divs">

                <div className="div-input-email">
                    <span className="span-icon-user"><i className="fa-regular fa-user" /></span><input className="input-email" type="text" placeholder="Email" />
                </div>

                <div className="div-input-password">
                    <span className="span-icon-password"><i className="fa-solid fa-lock" /></span>

                    <input className="input-password" type={isVisible ? "text" : "password"} placeholder="Senha" />
                    <i className={`fa-solid ${isVisible ? "fa-eye" : "fa-eye-slash"}`} onClick={toggleVisibility} />
                </div>

            </div>

            <div className="extra-buttons-signin">
                <button className="return-button" onClick={() => navigate("/")}>Voltar</button>

                {/* Button to Login */}
                <button className="login-button">Faça Login</button> {/* AINDA SEM FUNCIONALIDADE DE ROTAS */}
                {/* Fim Button to Login */}
            </div>
        </div>
    )
}

export default SignIn