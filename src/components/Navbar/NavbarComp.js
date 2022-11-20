//import "./NavbarComp.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavbarComp() {
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-lg bg-secondary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={process.env.PUBLIC_URL + "icon.png"} alt="Bootstrap" width="30" height="35" />
        </a>
        <span class="navbar-brand mb-0 h1 text-white">
          InstaYA - Gestión de paquetes
        </span>
        <div style={{ justifyContent: "end" }} class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-2 mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link text-white"
                onClick={() => navigate("login")}
              >
                Login
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                onClick={() => navigate("signup")}
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComp;
