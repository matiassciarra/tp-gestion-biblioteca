import { useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Logout = () => {
    useAuth()
    useLoaderData()
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/");
    }, []);
  return (
    <div>
        Logout
    </div>
  )
}
