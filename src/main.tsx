import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from "./pages/MainPage/Main.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.tsx";
import {SuccessRegistrationPage} from "./pages/SuccessRegistrationPage/SuccessRegistrationPage.tsx";

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage/>
	},
	{
		path: '/login',
		element: <LoginPage/>
	},
	{
		path: '/registration',
		element: <RegistrationPage/>
	},
	{
		path: '/success',
		element: <SuccessRegistrationPage/>
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>,
)
