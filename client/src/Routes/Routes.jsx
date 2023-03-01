import React from "react";
import Home from "../Pages/home";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Shop from "../Pages/Shop";
import { Footer } from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import SubNavbar from "../Layout/SubNavbar";
import { getAllProducts, getProduct } from "../Api/api";
import Product from "../Pages/Product";
import Signin from "../Admin/Pages/Signin";
import { PrivateRoute } from "../Private/PrivateComponent";
import Dashboard from "../Admin/Pages/Dashboard";
import { useSelector } from "react-redux";

const Routing = () => {
  const auth = useSelector((state) => state.admin.isAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          loader={async () => {
            return await getAllProducts();
          }}
          element={
            <>
              <Navbar />
              <SubNavbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route element={<Home />} path="/" index />
          <Route element={<Shop />} path="/shop" index />
          <Route
            element={<Product />}
            path="/product/:id"
            loader={({ params }) => getProduct(params.id)}
            index
          />
        </Route>
        <Route path="/admin">
          <Route
            index
            path="/admin/signin"
            element={
              <>{auth ? <Navigate to={"/admin/dashboard"} /> : <Signin />}</>
            }
          />
          <Route
            index
            path="/admin/dashboard"
            element={
              <PrivateRoute isAuthenticated={auth}>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
