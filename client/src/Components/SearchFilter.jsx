import React, { useState } from "react";
import { useSelector } from "react-redux";

const withSearch = (WrappedComponent) => {
  const SearchComponent = () => {
    const { products,priceRange,sortProduct } = useSelector((state) => state.products);

    const [filterValue, setFilterValue] = useState("");
    const value = priceRange;
    const [sortValue,setSortValue] = useState("")

    const handleInputChange = (event) => {
      setFilterValue(event.target.value);
    };


    const handleSortValue = (value) => {
        setSortValue(value)
    }

    

    const filterData = () => {
        let filteredObjects;
        if (!filterValue) {
          filteredObjects = products.filter((object) => {
            return object.price >= priceRange[0] && object.price <= priceRange[1];
          });
        } else {
          filteredObjects = products.filter((item) =>
            item.title.toLowerCase().includes(filterValue.toLowerCase())
          );
        }
        if (sortProduct === "High to low") {
          filteredObjects.sort((a, b) => b.price - a.price);
        } else if (sortProduct === "Low to high") {
          filteredObjects.sort((a, b) => a.price - b.price);
        } else if (sortProduct === "High rated") {
          filteredObjects.sort((a, b) => b.rating.count - a.rating.count);
        } else if (sortProduct === "Low rated") {
          filteredObjects.sort((a, b) => a.rating.count - b.rating.count);
        }
  
        return filteredObjects;
      };

   

    return (
      <WrappedComponent
        handleInputChange={handleInputChange}
        filterData={filterData}
        priceRangevalue={value}
        handleSortValue={handleSortValue}
      />
    );
  };
  return SearchComponent;
};

export default withSearch;
