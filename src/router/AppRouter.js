import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import NavbarComp from "../components/Navbar/NavbarComp";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import OrderList from "../pages/OrderList/OrderList";
import CreateOrder from "../pages/CreateOrder/CreateOrder";
import Order from "../pages/Order/Order";
import NotFound from "../pages/NotFound/NotFound"
import Footer from "../components/Footer/FooterComp";

function AppRouter() {
  return (
    <Router>
      <NavbarComp />
      <Footer />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/orderlist" element={<OrderList />} />
        <Route exact path="/create" element={<CreateOrder />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/order/:id" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
