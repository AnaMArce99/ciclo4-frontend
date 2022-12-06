import React from 'react'
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
    const navigate = useNavigate();
    return (
    <div className="container">
    <div className="order">
      <div className="order__field">
        <div className="order__title">
          Gestión de paquetes - Registro Ordenes
        </div>
        <div className="orderList__card"></div>
        <div className="order__footer">
          <button onClick={() => navigate("/orderlist")}>
          Crear orden
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};
export default CreateOrder