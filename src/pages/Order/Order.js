import React from 'react'
import { useNavigate } from "react-router-dom";

const Order = () => {
    const navigate = useNavigate();
    return (
      <div className="container">
        Actualización de Ordenes
        <button onClick={() => navigate("/orderlist")}>Actualizar órden</button>
    </div>
  );
    };
export default Order