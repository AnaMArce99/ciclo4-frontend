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
            <button
              onClick={() => navigate("/create")}
              type="button"
              class="btn btn-primary"
            >
              Crear Orden
            </button>
          </div>
          <div className="orderList__card">
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"># Servicio</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Ciudad entrega</th>
                    <th scope="col">Direccion entrega</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <button onClick={() => navigate("/order/1")}>1</button>
                    </th>
                    <td>01/01/22</td>
                    <td>Cali</td>
                    <td>Avenida 5N #6N-03</td>
                    <td>Guardado</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <button onClick={() => navigate("/order/2")}>2</button>
                    </th>
                    <td>01/01/22</td>
                    <td>Bogotá</td>
                    <td>Calle 3 #23-06</td>
                    <td>Guardado</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <button onClick={() => navigate("/order/3")}>3</button>
                    </th>
                    <td>01/01/22</td>
                    <td>Medellín</td>
                    <td>Carrera 25 #56-03</td>
                    <td>Guardado</td>
                  </tr>
                </tbody>
              </table>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
