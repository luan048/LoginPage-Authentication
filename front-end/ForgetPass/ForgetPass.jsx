import React from "react";
import { useNavigate } from "react-router-dom";

import './ForgetPass.css'

function ForgetPass() {

    // Para Navegar entre as rotas
    const navigate = useNavigate()
    //

    return (
        <div className="general-div-fgpass">

            <div className="div-return-arrow">
                <i class="fa-solid fa-arrow-left" onClick={() => navigate("/")}></i>
            </div>

            <p className="title">Criar Nova Senha</p>

            <div className="div-inputs-fgpass">
                <input className="email-fgpass" type="text" placeholder="Email"/>
                <input className="lastP-fgpass" type="text" placeholder="Senha Antiga"/>
                <input className="newP-fgpass" type="text" placeholder="Nova Senha"/>
            </div>

            <div className="div-button-fgpass">
                <button className="button-fgpass">Redefinir Senha</button>
            </div>
        </div>
    )
}

export default ForgetPass