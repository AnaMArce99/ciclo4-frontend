// snippet example "rafce"
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="login">
        <div className="login__field">
          <div className="login__title">Gestión de paquetes - Login</div>
          <div className="login__card">
            <div className="login__header">
              <button onClick={() => navigate("/signup")}>Sign up</button>
            </div>
            <div className="login__form">
              <div className="form__field">
                <label htmlFor="user">Usuario</label>
                <input
                  id="user"
                  type="text"
                  placeholder="Por favor ingrese su usuario" />
              </div>
              <div className="form__field">
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Por favor ingrese su contraseña" />
              </div>
              <button onClick={() => navigate("/orderlist")}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
