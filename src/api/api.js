import axios from "axios";

const serviceBase = axios.create({
  baseURL: "http://localhost:8000/api",
});

// Users
export const signin = (data) => post(serviceBase, '/user_login', data);
export const signup = (data) => post(serviceBase, '/user_create', data);

// Orders
export const getAllOrders = () => get(serviceBase, "/list_order");
export const getOrerDetail = (data) => get(serviceBase, `/order/:${data}`)
export const createNewOrder = (data) => post(serviceBase, '/create_order', data);
export const updateOrder = (data) => post(serviceBase, "/order", data)

const get = (service, URL) => service.get(URL);
const post = (service, URL, data) => service.post(URL, data);
