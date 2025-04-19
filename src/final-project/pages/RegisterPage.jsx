
import React, { useState } from "react";

import AuthForm from "./AuthForm";

const RegisterPage = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // console.log(input);
  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Input Name",
      required: true,
    },
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
    {
      name: "image_url",
      label: "Image",
      type: "text",
      placeholder: "Input Image Url",
      required: true,
    },
  ];

  return (
    <AuthForm
      fields={fields}
      onChange={handleChange}
      input={input}
      buttonLabel="Register"
      type="register"
    />
  );
};

export default RegisterPage;
