import {
  faBell,
  faCartShopping,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import withSearch from "../Components/SearchFilter";

const SubNavbar = ({ handleInputChange, filterData }) => {
  return (
    <div className="subnavbar">
      <div className="wrapper">
        <ul className="nav_links">
          <li className="nav_link">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav_link">
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li className="nav_link">About</li>
          <li className="nav_link">Blog</li>
        </ul>

        <div className="nav_searchbar">
          <div className="container">
            <input
              onChange={handleInputChange}
              placeholder="Search what you need"
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <div className="nav_actions">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
    </div>
  );
};

export default withSearch(SubNavbar);
