import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../Redux/Features/productsSlice";

function valuetext(value) {
  return `${value} AED`;
}

function RangeSlider() {
  const { priceRange } = useSelector((state) => state.products);
  const value = priceRange;
  const dispatch = useDispatch();

  const handlePriceChange = (e, value) => {
    dispatch(setPriceRange(value));
  };

  return (
    <Box>
      <Slider
        max={1000}
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}

export default RangeSlider;
