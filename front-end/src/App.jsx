import React from "react";
import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"; 

import './App.css'

function App() {

    // Para navegar entre as rotas
    const navigate = useNavigate()
    //
    const [isVisible, setIsVisible] = useState(false)

    function toggleVisibility() {
        setIsVisible(!isVisible) // Valor do setIsVisible será sempre o contrário do valor original de isVisible
    }

    return (
        <>
            <div className="general-div">
                <p className="cadastrar">Cadastrar</p>

                <div className="input-divs">

                    <div className="div-input-name">
                        <span className="span-icon-name"><i className="fa-regular fa-user"></i></span><input className="input-name" type="text" placeholder="Name"/>
                    </div>

                    <div className="div-input-email">
                        <span className="span-icon-user"><i class="fa-regular fa-envelope" /></span><input className="input-email" type="text" placeholder="Email"/>
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
                    <button className="signup-button">Cadastrar</button>  {/* AINDA SEM FUNCIONALIDADE DE ROTAS*/}

                    {/* Button to Sign In */}
                    <button className="login-button" onClick={() => navigate("/signin")}>Faça Login</button>
                    {/* Fim Button to Sign In */}
                </div>
            </div>
        </>
    )
}

export default App