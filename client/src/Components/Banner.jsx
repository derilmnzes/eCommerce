import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="page_slider">
      <div className="image_container">
        <img
          src="https://images.pexels.com/photos/14641437/pexels-photo-14641437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/13347119/pexels-photo-13347119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="discription">
        <div className="title">
          <h1>
            Your Premium
            <br /> Sound, Unplugged!
          </h1>
        </div>
        <div className="subtitle">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="actions">
          <Button>Find Out More</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
