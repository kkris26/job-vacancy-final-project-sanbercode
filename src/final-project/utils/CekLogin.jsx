import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const CekLogin = ({ children }) => {
  const userData = Cookies.get("user");
  const user = userData ? JSON.parse(userData) : null;
  const userToken = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !userToken) {
      
      navigate("/login");
    }
  }, [user, userToken, navigate]);

  return user && userToken ? children : null;
};

export default CekLogin;
