import axios from "axios";

export async function getAllProducts() {
  try {
    const response = await axios.get('/get/products');
    return response.data;
  } catch (err) {
    return err.response.data;
  }
}

export async function getProduct(id) {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
}

/*Admin Api*/

export async function adminSignIn(data) {
  try {
    const response = await axios.post("/admin/signin", data);
    return response;
  } catch (err) {
    return err.response.data;
  }
}

export async function addProduct(data) {
  try {
    const response = await axios.post("/add/product", data);
    return response;
  } catch (err) {
    return err.response.data;
  }
}
