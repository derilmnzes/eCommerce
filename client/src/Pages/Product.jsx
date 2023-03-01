import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import { getProduct } from "../Api/api";
import Button from "../Components/Button";
import { setProduct } from "../Redux/Features/productsSlice";

const Product = () => {
  const {product} = useSelector(state => state.products)
  console.log(product)
  const dispatch = useDispatch();
  const param = useParams();

  const fetchProduct = async () => {
    const res = await getProduct(param.id);
    dispatch(setProduct(res));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="product">
      <div className="container">
        <div className="image_container">
          <img src={product.image} />
        </div>
        <div className="discription">
          <h1 className="title">{product.title}</h1>
          <div className="rating">
            <Rating name="read-only"  readOnly />
          </div>
          <div className="price">
            <h1>{product.price}</h1>
          </div>
          <div className="category">{product.category}</div>
          <p className="detail">{product.description}</p>

          <div>
            <Button>Add To Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
