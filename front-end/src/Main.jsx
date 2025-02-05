import React from "react";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Routes
import App from "./App.jsx";
import ForgetPass from "../ForgetPass/ForgetPass.jsx";
import SignIn from "../SignIn/SignIn.jsx";
// Fim Routes

const routers = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },

    {
        path: "/signin",
        element: <SignIn />
    },

    {
        path: "/forgetpass",
        element: <ForgetPass />
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={routers}/>
    </StrictMode>
)