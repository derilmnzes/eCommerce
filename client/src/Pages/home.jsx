import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../Components/Banner";
import Button from "../Components/Button";
import Card from "../Components/Card";
import withSearch from "../Components/SearchFilter";

const Home = (props) => {
  const { products } = useSelector((state) => state.products);

  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="container">
        <Banner />

        <div className="collection">
          <div className="container">
            <div className="title">
              <h1>Our Premium Collection</h1>
            </div>
            <div className="nav_by_category">
              <ul className="nav_lists">
                <li className="nav_list">All Products</li>
                <li className="nav_list">Coats & Jacket</li>
                <li className="nav_list">Dressed</li>
                <li className="nav_list">Playsuit</li>
                <li className="nav_list">Short</li>
                <li className="nav_list">Skirt</li>
                <li className="nav_list">T-Shirt</li>
              </ul>
            </div>

            <div className="products">
              {products.slice(0, 10).map((item, index) => (
                <Card
                  name={item.title}
                  category={item.category}
                  image={item.image}
                  key={item.id}
                  id={item.id}
                  navigate={navigate}
                />
              ))}
            </div>

            <div className="action_buttons">
              <Button
                onClick={() => {
                  navigate("/shop");
                }}
              >
                Load More
              </Button>
            </div>
          </div>
        </div>

        {/* <div className="collection">
          <div className="container">
            <div className="caption">
              <h1 className="title">Top Items</h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                voluptatem illo, aut magni placeat ipsa, est expedita veritatis
                molestiae aperiam,
              </p>
            </div>

            <div className="products">
              {products.map((item, index) => (
                <Card
                  name={item.title}
                  category={item.category}
                  image={item.image}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div> */}

        <div className="section">
          <div className="container">
            <div className="image_container">
              <img
                src="https://images.pexels.com/photos/6001821/pexels-photo-6001821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/6740102/pexels-photo-6740102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="discription">
              <h1>Story about our brand</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate nobis esse quidem aut doloribus velit nemo optio
                totam delectus repellendus ea eaque, recusandae commodi
                eligendi, suscipit molestiae, repellat soluta in. Cumque, maxime
                ut magni quod placeat iste recusandae in, at quos temporibus
                eos, reprehenderit molestias sint nemo quaerat laborum ea error
                voluptatem harum. Quis rerum provident fugiat consectetur
                obcaecati porro? Officiis architecto
              </p>
              <Button>Read More</Button>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="logos"></div>
          </div>
        </div>

        <div className="section"></div>
      </div>
    </div>
  );
};

export default withSearch(Home);
