import logo from "./logo.svg";
import "./Scss/Main.scss";
import Routing from "./Routes/Routes";
import { useEffect } from "react";
import CustomizedSnackbars from "./Components/Snackbar";
import { RouterProvider } from "react-router-dom";


function App() {
  return (
    <>
    <Routing />
      <CustomizedSnackbars />
   
    </>
  );
}

export default App;
