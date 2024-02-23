import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/useAuth";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const navigate = useNavigate();

    const getUser = async (code) => {
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    code,
                }),
            });
            if (!res.ok) {
                return navigate("/login");
            }
            const user = await res.json();
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            return navigate("/");
        } catch (error) {
            console.error(error);
            navigate("/login");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, getUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
