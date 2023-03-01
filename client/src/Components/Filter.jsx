import { faChevronRight, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortProduct } from "../Redux/Features/productsSlice";
import Button from "./Button";
import Input from "./Input";
import RangeSlider from "./RangeSlider";
import withSearch from "./SearchFilter";

const categories = [
  "All Products",
  "T-Shirt",
  "Skirt",
  "Dressed",
  "Short",
  "Playsuit",
  "Coats & Jacket",
];

const sortProducts = ["Low to high", "High to low", "High rated", "low rated"];
const Filter = ({ handleInputChange,admin,handleClick }) => {
  const dispatch = useDispatch();
  const { sortProduct } = useSelector((state) => state.products);
  const handleSortChange = (e) => {
    dispatch(setSortProduct(e.target.name));
  };
  return (
    <div className="filter">
      <div className="container">
        {admin && <div className="action">
          <Button onClick={handleClick}>
            Add Product
          </Button>
        </div>}
        <div className="searchbar">
          <Input onChange={handleInputChange} placeholder="Search By Name.." />
        </div>
        <div className="pricerange">
          <div className="title">
            <h2>Price</h2>
            <FontAwesomeIcon icon={faFilter} />
          </div>
          <RangeSlider />
        </div>
        <div className="Sort">
          <div className="title">
            <h2>Sort</h2>
            <FontAwesomeIcon icon={faFilter} />
          </div>
          <FormGroup>
            {sortProducts.map((item, index) => (
              <div key={item} className="category">
                <FormControlLabel
                  control={
                    <Checkbox
                      value={item}
                      className="checkbox"
                      onChange={handleSortChange}
                      checked={sortProduct === item}
                    />
                  }
                  label={item}
                  name={item}
                />
              </div>
            ))}
          </FormGroup>
        </div>

        <div className="categories">
          <div className="title">
            <h2>Category</h2>
            <FontAwesomeIcon icon={faFilter} />
          </div>

          {categories.map((item, index) => (
            <div key={item} className="category">
              <div className="name">{item}</div>
              <div className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
