import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCotext } from "../../auth/AuthContext";
import { types } from "../../Types/types";

export const Login = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthCotext);

  const handleLogin = () => {

    const action = {
      type: types.login,
      payload: { name: "Osiris Soler Ramirez" }
    };
    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/'

    navigate( lastPath , {
      replace: true
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
