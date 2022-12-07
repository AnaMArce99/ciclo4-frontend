import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllOrders } from "../../api/api";
import "./OrderList.css";

function OrderList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    return await getAllOrders()
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              className="btn btn-primary"
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
                  {data.map((elem) => (
                    <tr key={elem._id}>
                      <th scope="row">
                        <button onClick={() => navigate(`/order/${elem._id}`)}>{elem._id}</button>
                      </th>
                      <td>{elem.date}</td>
                      <td>{elem.dest_city}</td>
                      <td>{elem.dest_address}</td>
                      <td>{elem.status}</td>
                    </tr>
                  ))}
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
