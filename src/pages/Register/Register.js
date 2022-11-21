import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="signup">
        <div className="signup__field">
          <div className="signup__title">
            Gestión de paquetes - Registro de usuarios
          </div>
          <div className="signup__card">
            <div className="signup__form">
              <div className="form__field">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                  required />
              </div>
              <div className="form__field">
                <label htmlFor="user">Usuario</label>
                <input
                  id="user"
                  type="text"
                  placeholder="Ingresa tu numero de cedula"
                  required />
              </div>
              <div className="form__field">
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Crea una contraseña"
                  required />
              </div>
              <div className="form__field">
                <label htmlFor="email">Correo</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Ingresa tu email"
                  required />
              </div>
              <button onClick={() => navigate("/login")}>Crear usuario</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
