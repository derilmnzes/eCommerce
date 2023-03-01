import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "../Redux/Features/productsSlice";
import { getAllProducts } from "../Api/api";

const Navbar = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res = await getAllProducts();

    dispatch(setProducts(res));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo">
          <Link to={"/"}>
            <h1>Logo</h1>
          </Link>
        </div>
        <div className="info_nav">
          <div className="info_one">
            <FontAwesomeIcon icon={faPhone} />
            <span>Contact us</span>
          </div>
          <div className="info_two">
            <span>Free Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
