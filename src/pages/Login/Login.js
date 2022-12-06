import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const customSubmit = (data) => {
    console.log("login data", data);
  };
  return (
    <div className="container">
      <div className="login">
        <div className="login__field">
          <div className="login__title">Gestión de paquetes - Login</div>
          <div className="login__card">
            <div className="login__header">
              <button onClick={() => navigate("/signup")}>Sign up</button>
            </div>
            <form className="login__form" onSubmit={handleSubmit(customSubmit)}>
              <div className="form__field">
                <label htmlFor="user">Usuario</label>
                <input
                  {...register("user", {
                    required: true,
                    maxLength: 12,
                    minlength: 4,
                    pattern: "[1-9]+[0-9]",
                  })}
                  aria-invalid={errors.user ? "true" : "false"}
                />
                {errors.user && <p>Por favor ingrese su número cédula</p>}
              </div>
              <div className="form__field">
                <label htmlFor="password">Contraseña</label>
                <input
                  {...register("password", {
                    required: true,
                    pattern: ".{8,}",
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && <p>Por favor ingrese su contraseña</p>}
              </div>
              <input type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

// <button onClick={() => navigate("/orderlist")}>Login</button>
