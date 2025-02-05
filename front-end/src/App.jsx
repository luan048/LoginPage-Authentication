import React from "react";
import {useState} from 'react'
import { Link } from "react-router-dom"; 

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
                        <span className="span-icon-user"><i className="fa-regular fa-user" /></span><input className="input-email" type="text" placeholder="Email"/>
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

                <div className="extra-buttons">
                    <button className="signup-button">Cadastrar</button>

                    {/* Button to Sign In */}
                    <button className="login-button"><Link to={"/signup"} style={{textDecoration: "none", color: "inherit"}}>Faça Login</Link></button>
                    {/* Fim Button to Sign In */}
                </div>
            </div>
        </>
    )
}

export default App