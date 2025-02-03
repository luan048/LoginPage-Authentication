import React from "react";
import {useState} from 'react'

import './App.css'

function App() {

    const [isVisible, setIsVisible] = useState(false)

    function toggleVisibility() {
        setIsVisible(!isVisible)
    }

    return (
        <>
            <div className="general-div">
                <p className="entrar">Entrar</p>

                <div className="input-divs">

                    <div className="div-input-email">
                        <span className="span-icon-user"><i className="fa-regular fa-user"></i></span><input className="input-email" type="text" placeholder="Email"/>
                    </div>
            
                    <div className="div-input-password">
                        <span className="span-icon-password"><i className="fa-solid fa-lock"></i></span>

                        <input className="input-password" type={isVisible ? "text" : "password"} placeholder="Senha"/>
                        <i className={`fa-solid ${isVisible ? "fa-eye" : "fa-eye-slash"}`} onClick={toggleVisibility}></i>
                    </div>

                </div>

                <a className="forgot-password" href="">Esqueci Senha</a>

                <div className="extra-buttons">
                    <button className="signup-button">Cadastrar</button>
                    <button className="login-button">Faça Login</button>
                </div>
            </div>
        </>
    )
}

export default App