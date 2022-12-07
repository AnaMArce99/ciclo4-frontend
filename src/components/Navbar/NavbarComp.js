import "./NavbarComp.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";

function NavbarComp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={process.env.PUBLIC_URL + "icon.png"}
            alt="Bootstrap"
            width="50"
            height="50"
          />
        </a>
        <div className="navbarBrand">InstaYA - Gestión de paquetes</div>
        <div
          style={{ justifyContent: "end" }}
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          {user.user.name ? (
            <h3 style={{ color: "white" }}>{user.user.name}</h3>
          ) : (
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <button onClick={() => navigate("login")}>Login</button>
              </li>
              <li className="nav-item">
                <button onClick={() => navigate("signup")}>Signup</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarComp;
