import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import NavbarComp from "../components/Navbar/NavbarComp";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import OrderList from "../pages/OrderList/OrderList";
import CreateOrder from "../pages/CreateOrder/CreateOrder";
import Order from "../pages/Order/Order";
import NotFound from "../pages/NotFound/NotFound";
import Footer from "../components/Footer/FooterComp";

function AppRouter() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <Router>
      <NavbarComp />
      <Footer />
      <Routes>
        {user.user.name ? (
          <>
            <Route exact path="/orderlist" element={<OrderList />} />
            <Route exact path="/create" element={<CreateOrder />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/order/:id" element={<Order />} />
            <Route path="*" element={<Navigate to="/orderlist" replace />} />
          </>
        ) : (
          <>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default AppRouter;
