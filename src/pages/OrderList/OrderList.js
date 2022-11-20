import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderList.css";

function OrderList() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="orderList">
        <div className="orderList__field">
          <div className="orderList__title">
            Gestión de paquetes - Listado de Órdenes
          </div>
          <div className="orderList__header">
            <button onClick={() => navigate("/signup")} type="button" class="btn btn-primary">Crear Orden</button>
          </div>
          <div className="orderList__card">

          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
