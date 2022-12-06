import React from "react";
import "./Order.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="container">
      <div className="order">
        <div className="order__field">
          <div className="order__title">
            Gestión de paquetes - Actualización de Ordenes
          </div>
          <div className="orderList__card">{id}</div>
          <div className="order__footer">
            <button onClick={() => navigate("/orderlist")}>
              Actualizar órden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Order;
