import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import Callback from "./pages/Callback.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Header from "./components/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="/callback" element={<Callback />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/dashboard" element={<App />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
