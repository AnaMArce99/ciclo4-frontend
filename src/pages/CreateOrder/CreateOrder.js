import React from 'react'
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
    const navigate = useNavigate();
    return (
      <div className="container">
        Registro Ordenes
        <button onClick={() => navigate("/orderlist")}>Crear orden</button>
    </div>
  );
};
export default CreateOrder