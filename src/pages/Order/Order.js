import React, { useEffect } from "react";
import "./Order.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getOrerDetail, updateOrder } from "../../api/api";

const Order = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({
    id: id,
    city: "",
    date: "",
    dest_address: "",
    dest_city: "",
    dest_id: "",
    dest_name: "",
    address: "",
    height: 0,
    length: 0,
    status: "",
    time: "",
    weight: 0,
    width: 0,
  });

  useEffect(() => {
    fetchData(id);
  }, []);

  const fetchData = async (idOrder) => {
    return await getOrerDetail(idOrder)
      .then((res) => {
        setData({
          ...data,
          ["city"]: res.data.city,
          ["address"]: res.data.address,
          ["date"]: res.data.date.slice(0, -14),
          ["dest_address"]: res.data.dest_address,
          ["dest_city"]: res.data.dest_city,
          ["dest_id"]: res.data.dest_id,
          ["dest_name"]: res.data.dest_name,
          ["height"]: res.data.height,
          ["length"]: res.data.length,
          ["status"]: res.data.status,
          ["time"]: res.data.time,
          ["weight"]: res.data.weight,
          ["width"]: res.data.width,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (event) => {
    event.preventDefault();

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const update = async () => {
    return await updateOrder(data)
      .then((res) => {
        navigate("/orderlist");
      })
      .catch((err) => {
        alert("Algo salio mal, intenta nuevamente");
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="createOrder">
        <div className="createOrder__field">
          <div className="createOrder__title">
            Gestión de paquetes - Actualización de Ordenes
          </div>
          <div className="createOrder__card">
          <div className="createOrder__card__size">
              <form className="form__field">
                <label>Fecha</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  placeholder="1"
                  value={data.date}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </form>
              <form className="form__field">
                <label>Hora</label>
                <input
                  id="time"
                  name="time"
                  type="text"
                  placeholder="2:00 PM"
                  value={data.time}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </form>
            </div>
            <div>
              <form className="form__field">
                <label>Estado</label>
                <select
                  name="status"
                  id="status"
                  value={data.status}
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value="Guardado">Guardado</option>
                  <option value="Cumplido">Cumplido</option>
                  <option value="Cancelado">Cancelado</option>
                </select>
              </form>
            </div>
            <div className="createOrder__card__size">
              <form className="form__field__size">
                <label>Largo</label>
                <input
                  id="length"
                  name="length"
                  type="text"
                  placeholder="1"
                  value={data.length}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </form>
              <form className="form__field__size">
                <label>Ancho</label>
                <input
                  id="width"
                  name="width"
                  type="text"
                  placeholder="1"
                  value={data.width}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </form>
              <form className="form__field__size">
                <label>Alto</label>
                <input
                  id="height"
                  name="height"
                  type="text"
                  placeholder="1"
                  value={data.height}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </form>
              <form className="form__field__size">
                <label>Peso</label>
                <input
                  id="weight"
                  name="weight"
                  type="text"
                  placeholder="1"
                  value={data.weight}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </form>
            </div>
            <div>
              <div className="form__field">
                <label>Dirección de recogida</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Ingresa dirección de recogida"
                  value={data.address}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
              <div className="form__field">
                <label>Ciudad de recogida</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Ingresa ciudad de recogida"
                  value={data.city}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
              <div className="form__field">
                <label>Nombre destinatario</label>
                <input
                  id="dest_name"
                  name="dest_name"
                  type="text"
                  placeholder="Ingresa nombre destinatario"
                  value={data.dest_name}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
              <div className="form__field">
                <label>Cédula/NIT destinatario</label>
                <input
                  id="dest_id"
                  name="dest_id"
                  type="text"
                  placeholder="Ingresa identificación destinatario"
                  value={data.dest_id}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
              <div className="form__field">
                <label>Dirección de entrega</label>
                <input
                  id="dest_address"
                  name="dest_address"
                  type="text"
                  placeholder="Ingresa dirección de entrega"
                  value={data.dest_address}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
              <div className="form__field">
                <label>Ciudad de entrega</label>
                <input
                  id="dest_city"
                  name="dest_city"
                  type="text"
                  placeholder="Ingresa ciudad de entrega"
                  value={data.dest_city}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="createOrder__footer">
            <button onClick={() => update()}>Actualizar órden</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Order;
