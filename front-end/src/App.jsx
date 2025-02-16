import React from "react";
import axios from "axios";
import {useState} from 'react'
import { useNavigate } from "react-router-dom"; 

import './App.css'

// CONEXÃO COM API
const api = axios.create({
    baseURL: 'http://localhost:8000'
})
//

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

                <div className="extra-buttons">
                    <button className="signup-button" onClick={() => navigate("/")}>Faça Login</button>

                    {/* AQUI SERÁ UMA FUNÇÃO CONECTADA COM A API PARA CADASTRAR NOVOS USUÁRIOS */}

                    {/* Button to SignUp */}
                    <button className="login-button">Cadastre-se</button> {/*AINDA SEM FUNÇÕES */}
                    {/* END Button to SignUp */}

                </div>
            </div>
        </>
    )
}

export default App