import React, { useState } from "react";
import AuthForm from "./AuthForm";


const LoginPage = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Input Email",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Input Password",
      required: true,
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // console.log(input);
  return (
    <AuthForm
      type="login"
      input={input}
      fields={fields}
      onChange={handleChange}
      buttonLabel="Login"
    />
  );
};

export default LoginPage;
