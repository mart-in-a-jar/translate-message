import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider from "./components/AuthProvider.jsx";
import Header from "./components/Header.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import "./index.css";
import App from "./pages/App.jsx";
import Callback from "./pages/Callback.jsx";
import Login from "./pages/Login.jsx";
import Me from "./pages/Me.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/callback" element={<Callback />} />
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<App />} />
                    <Route path="/me" element={<Me />} />
                </Route>
            </Routes>
        </AuthProvider>
    </BrowserRouter>
);
