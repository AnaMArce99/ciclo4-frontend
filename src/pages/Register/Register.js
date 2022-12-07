import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/api";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    user: "",
    password: "",
    email: ""
  })

  const handleInputChange = (event) => {
    event.preventDefault();

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  
  const  signUpUser = async () =>{
    console.log(data)
    return await signup(data).then((res) => {
      navigate("/login");
    }).catch((err) => {
      alert("Un error ha ocurrido!")
    })
  }

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
                  name="name"
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                  required
                  onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="form__field">
                <label htmlFor="user">Usuario</label>
                <input
                  id="user"
                  name="user"
                  type="text"
                  placeholder="Ingresa tu numero de cedula"
                  required
                  onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="form__field">
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Crea una contraseña"
                  required
                  onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="form__field">
                <label htmlFor="email">Correo</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ingresa tu email"
                  required
                  onChange={(e) => handleInputChange(e)} />
              </div>
              <button onClick={() => signUpUser()}>Crear usuario</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
