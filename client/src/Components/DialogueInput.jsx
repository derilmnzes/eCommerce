import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import Input from "./Input";

const InputDialog = ({
  open,
  title,
  inputs,
  onClose,
  onSubmit,
  initialValues,
}) => {
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
    onClose();
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: files }));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {inputs.map((input) => {
            if (input === "image") {
              return (
                <>
                  <div>
                    <TextField
                      fullWidth
                      sx={{ margin: "10px 0px" }}
                      type={"text"}
                      disabled={true}
                      value={values[input]}
                      placeholder="Image URl"
                    />
                  </div>
                  <input
                    type={"file"}
                    onChange={handleFileChange}
                    name={input}
                  />
                </>
              );
            } else {
              return (
                <TextField
                  key={input}
                  label={input}
                  sx={{ margin: "10px 0px" }}
                  name={input}
                  value={values[input] || ""}
                  onChange={handleInputChange}
                  fullWidth
                  {...input.props}
                />
              );
            }
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default InputDialog;
