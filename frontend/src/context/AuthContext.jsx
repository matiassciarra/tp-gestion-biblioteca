import { createContext, useState, useContext, useEffect } from "react";
import {
    registerRequest,
    loginRequest,
    verifyTokenRequest,
    logout
} from "../service/auth";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("El useAuth debe estar dentro de un provider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState("");

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setErrors(error.response.data);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            console.log(error);
            setErrors(error.response.data.message);
        }
    };
    const signOut = async () => {
        try {
            await logout();
            setIsAuthenticated(null);
            setUser(null);
        } catch (error) {
            setErrors(error.response.data.message)    
        }
    }

    useEffect(() => {
        if (errors) {
            const timer = setTimeout(() => {
                setErrors(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setIsAuthenticated(false);
                setUser(null);
                return;
            }
            try {
                const res = await verifyTokenRequest(cookies.token);
                if (!res.data) return setIsAuthenticated(false);
                setIsAuthenticated(true);
                setUser(res.data);
            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
            }
        };
        checkLogin();
    }, []);

    return (
        <AuthContext.Provider
            value={{ signup, user, isAuthenticated, errors, signin, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};
