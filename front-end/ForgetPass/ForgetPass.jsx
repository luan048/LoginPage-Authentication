import React from "react";

import './ForgetPass.css'

function ForgetPass() {
    return (
        <div className="general-div-fgpass">
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