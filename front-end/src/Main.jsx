import React from "react";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Routes
import App from "./App.jsx";
import ForgetPass from "../ForgetPass/ForgetPass.jsx";
import SignUp from "../SignUp/SignUp.jsx";
// Fim Routes

const routers = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },

    {
        path: "/forgetpass",
        element: <ForgetPass />
    },

    {
        path: "/signup",
        element: <SignUp />
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={routers}/>
    </StrictMode>
)