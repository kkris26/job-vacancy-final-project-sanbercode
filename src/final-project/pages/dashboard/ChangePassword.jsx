import React, { useState } from 'react'
import AuthForm from '../AuthForm';

const ChangePassword = () => {
    const [input, setInput] = useState({
      email: "",
      password: "",
    });
    const fields = [
      {
        name: "current-password",
        label: "Currrent Password",
        type: "password",
        placeholder: "Input Currrent Password",
        required: true,
      },
      {
        name: "new-password",
        label: "New Password",
        type: "password",
        placeholder: "Input New Password",
        required: true,
      },
      {
        name: "confrim-password",
        label: "Confirm Password",
        type: "password",
        placeholder: "Confirm New Password",
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
  return (
    <div className='h-100 flex items-center justify-center bg-white md:py-70 shadow-md rounded-lg'>
      <AuthForm
        type="reset-password"
        input={input}
        fields={fields}
        onChange={handleChange}
        buttonLabel="Change Password"
      />
    </div>
  );
}

export default ChangePassword