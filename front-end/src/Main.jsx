import React from "react";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Routes
import App from "./App.jsx";
import ForgetPass from "../ForgetPass/ForgetPass.jsx";
import SignIn from "../SignIn/SignIn.jsx";
import HomePage from "../HomePage/HomaPage.jsx";
// Fim Routes

const routers = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />
    },

    {
        path: "/signup",
        element: <App />
    },

    {
        path: "/forgetpass",
        element: <ForgetPass />
    },

    // Essa rota só será acionada caso o método de login tiver sucesso, caso contrário, não será acessada
    {
        path: "/homepage",
        element: <HomePage />
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={routers}/>
    </StrictMode>
)