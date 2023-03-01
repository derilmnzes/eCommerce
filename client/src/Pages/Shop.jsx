import React from "react";
import { useSelector } from "react-redux";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import  Filter  from "../Components/Filter";
import withSearch from "../Components/SearchFilter";

const Shop = ({filterData,handleInputChange }) => {

  return (
    <div className="shop">
      <div className="container">
        <Banner />
        <div className="filter_products">
          <Filter handleInputChange={handleInputChange} />
          <div className="products">
            {filterData().map((item, index) => (
              <Card
                name={item.title}
                category={item.category}
                image={item.image}
                price={item.price}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withSearch(Shop);
