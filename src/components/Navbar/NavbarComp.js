import "./NavbarComp.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavbarComp() {
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={process.env.PUBLIC_URL + "icon.png"}
            alt="Bootstrap"
            width="50"
            height="50"
          />
        </a>
        <div class="navbarBrand">
          InstaYA - Gestión de paquetes
        </div>
        <div
          style={{ justifyContent: "end" }}
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-2 mb-2 mb-lg-0">
            <li class="nav-item">
              <button onClick={() => navigate("login")}>Login</button>
            </li>
            <li class="nav-item">
              <button onClick={() => navigate("signup")}>Signup</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComp;
