import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/useAuth";

const AuthProvider = ({ children }) => {
    // should validate a jwt before setting user, or people can just set a user object in localstorage to access the page
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
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
                setDisplayErrorMessage(true);
                return navigate("/login");
            }
            const user = await res.json();
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            setDisplayErrorMessage(false);
            return navigate("/");
        } catch (error) {
            setDisplayErrorMessage(true);
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
        <AuthContext.Provider
            value={{
                user,
                getUser,
                logout,
                displayErrorMessage,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
