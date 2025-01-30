import React from "react";

import './App.css'

function App() {
    return (
        <>
            <div className="general-div">
                <p className="entrar">Entrar</p>

                <div className="input-divs">
                    <i class="fa-regular fa-user"></i><input className="input-email" type="text" placeholder="Email"/>
                    <i class="fa-solid fa-lock"></i><input className="input-password" type="password" placeholder="Senha"/>
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