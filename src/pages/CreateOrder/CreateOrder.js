import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewOrder } from "../../api/api";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./CreateOrder.css";

const CreateOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [data, setData] = useState({
    user: user.user._id,
    city: "",
    date: "",
    dest_address: "",
    dest_city: "",
    dest_id: "",
    dest_name: "",
    address: "",
    height: 0,
    length: 0,
    status: "Guardado",
    time: "",
    weight: 0,
    width: 0,
  });

  const handleInputChange = (event) => {
    event.preventDefault();

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const create = async () => {
    return await createNewOrder(data)
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
            Gestión de paquetes - Registro Ordenes
          </div>
          <div className="createOrder__card">
            <div className="createOrder__card__header">
              <form className="form__field">
                <label>Fecha</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  placeholder="1"
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
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </form>
            </div>
            <div className="createOrder__card">
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
            <div className="createOrder__card__header">
              <form className="form__field__size">
                <label>Largo</label>
                <input
                  id="length"
                  name="length"
                  type="text"
                  placeholder="1"
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
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
            </div>
            <button onClick={() => create()}>Crear orden</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
