import React from "react";
import "./NotFound.css";
import logo from "../../assets/gato-negro.png";
//import 'bootstrap/dist/css/bootstrap.css';

function NotFound() {
  return (
    <div className="container">
      <div className="NotFound">
        <div className="NotFound__field">
          <header className="NotFound__header">
            <img
              className="NotFound__header-image"
              src={logo}
              alt="404"
            ></img>
          </header>
          <h1 className="NotFound__title">Página no encontrada</h1>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
