import React from "react";

import './App.css'

function App() {
    return (
        <>
            <div className="general-div">
                <p className="entrar">Entrar</p>

                <div className="input-divs">
                    <p className="email">Email</p>
                    <input className="input-email" type="text" />

                    <p className="password">Password</p>
                    <input className="input-password" type="password" />
                </div>

                <button className="login-button">Faça Login</button>

                <div className="extra-buttons">
                    <button className="signup-button">Cadastrar</button>
                    <a className="forgot-password" href="">Esqueci Senha</a>
                </div>
            </div>
        </>
    )
}

export default App