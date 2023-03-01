import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getAllProducts } from "../../Api/api";
import Card from "../../Components/Card";
import InputDialog from "../../Components/DialogueInput";
import Filter from "../../Components/Filter";
import withSearch from "../../Components/SearchFilter";
import CustomTable from "../../Components/Table";
import { setProducts } from "../../Redux/Features/productsSlice";

const defineObjKeys = (item) => {
  const keys = [];
  for (const key in item) {
    if (key !== "id") {
      keys.push(key);
    }
  }
  return keys;
};

const Dashboard = ({ filterData, handleInputChange }) => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [rows, setRows] = useState([]);
  const { products } = store.products;
  const [headers, setHeaders] = useState([]);
  const [newProduct, setNewProduct] = useState(false);
  const [product, setProduct] = useState({
    id: 1,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: 0,
  });
  const [toggle, setTogle] = useState(false);

  const fetchProducts = async () => {
    const data = await getAllProducts();
    dispatch(setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (item) => {
    const keys = defineObjKeys(item);
    setNewProduct(false);
    setRows(keys);

    setProduct(item);
    setTogle(true);
  };

  const handleAdd = () => {
    const keys = defineObjKeys(product);
    setNewProduct(true);
    setRows(keys);
    setTogle(true);
  };

  const handleSumbit = async (e) => {
    const { title, price, description, category, image, rating } = e;
    const formData = new FormData();
    if (typeof image === "string" || !newProduct) {
      formData.append(
        "myObject",
        new Blob([JSON.stringify(e)], { type: "application/json" })
      );
    } else {
      formData.append("title", title);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("rating", rating);
      formData.append("image", image[0]);
      if(newProduct){
        await addProduct(formData)
      }else{
      
      }
    }
  };

  return (
    <div className="dashboard">
      <div className="container">
        <div className="nav">
          <ul className="links">
            <li>Products</li>
            <li>Orders</li>
          </ul>
        </div>
        <div className="products">
          <div className="container">
            <div className="title">
              <h1>Products</h1>
            </div>
            <div className="filter_products">
              <div className="filter_container">
                <Filter
                  admin={true}
                  handleClick={handleAdd}
                  handleInputChange={handleInputChange}
                />
              </div>
              <div className="cards">
                {filterData().map((item, index) => (
                  <Card
                    name={item.title}
                    admin={true}
                    category={item.category}
                    image={item.image}
                    key={item.id}
                    id={item.id}
                    handleEdit={() => handleEdit(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="orders">
          <div className="container"></div>
        </div>
      </div>
      <InputDialog
        onClose={() => setTogle(false)}
        inputs={rows}
        onSubmit={(e) => handleSumbit(e)}
        initialValues={product}
        open={toggle}
      />
    </div>
  );
};

export default withSearch(Dashboard);
