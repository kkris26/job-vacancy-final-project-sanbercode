import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";

const AuthForm = ({ input, type, onChange, fields, buttonLabel }) => {
  const [error, setError] = useState("");
  const { login } = useGlobal();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    if (type === "register") {
      axios
        .post(
          "https://final-project-api-alpha.vercel.app/api/auth/register",
          input
        )
        .then(() => {
          document.getElementById("my_modal_1").showModal();
        })
        .catch((err) => setError(err.response.data.msg));
    } else if (type === "login") {
      axios
        .post(
          "https://final-project-api-alpha.vercel.app/api/auth/login",
          input
        )
        .then((res) => {
          login(res.data.token, res.data.user);
          navigate("/dashboard");
        })
        .catch((err) => setError(err.response.data.msg));
    }
  };

  const handleClose = () => {
    navigate("/login");
  };

  return (
    <fieldset className="fieldset md:w-sm w-xs shadow-md border border-base-200 p-8 rounded-box">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations!</h3>

          <p className="pt-2 text-sm">
            The account has been successfully created, please log in first
          </p>

          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={() => handleClose()}
                className="btn rounded-md bg-blue-600 hover:bg-blue-800 text-white"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={input[field.name]}
              onChange={onChange}
              className="input w-full"
              minLength={field.type === "password" ? 8 : undefined}
              required={field.required}
            />
          </div>
        ))}
        {type !== "reset-password" && (
          <div className="mt-3 0">
            {type === "register" ? (
              <p>
                Have an account? {""}
                <Link to="/login" className="font-bold text-blue-600">
                  Log in
                </Link>
              </p>
            ) : (
              <p>
                Don't have an account? {""}
                <Link to="/register" className="font-bold text-blue-600">
                  Register
                </Link>
              </p>
            )}
          </div>
        )}
        <div className=" flex flex-col gap-2">
          <button
            type="submit"
            className="btn bg-blue-600 hover:bg-blue-800 text-white w-full"
          >
            {buttonLabel}
          </button>

          {type !== "reset-password" && (
            <Link
              to="/"
              className=" text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              Back to Homepage
            </Link>
          )}
        </div>
      </form>
      {error && (
        <div>
          <p className="text-error font-medium">{error}</p>
        </div>
      )}
    </fieldset>
  );
};

export default AuthForm;
