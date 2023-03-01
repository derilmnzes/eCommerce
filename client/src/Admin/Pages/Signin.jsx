import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminSignIn } from "../../Api/api";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import CustomizedSnackbars from "../../Components/Snackbar";
import { setAuth } from "../../Redux/Features/admin";
import { setsnackbar } from "../../Redux/Features/snackbar";



const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    const res = await adminSignIn(data);
    if (res.status === 200) {
      const { token, message } = res.data;
      localStorage.setItem("token", token);
      dispatch(setAuth(true));
      navigate("/admin/dashboard");
      dispatch(
        setsnackbar({
          message,
          open: true,
          severity: "success",
        })
      );
    } else {
      dispatch(
        setsnackbar({
          message: res,
          open: true,
          severity: "error",
        })
      );
    }
  };
  return (
    <div className="signin">
      <div className="container">
        <form onSubmit={handleSumbit}>
          <Input
            type={"email"}
            name={"email"}
            required={true}
            onChange={handleChange}
            placeholder={"Email.."}
          />
          <Input
            type={"password"}
            required={true}
            name={"password"}
            onChange={handleChange}
            placeholder={"Password.."}
          />
          <Button type={"sumbit"}>Sign in</Button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
