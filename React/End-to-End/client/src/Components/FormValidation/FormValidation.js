import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";

const paperStyle = {
  width: "300px",
  height: "75vh",
  margin: "30px auto",
  padding: "20px",
};

function FormValidation(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [formError, setFormError] = useState({
    username: null, //enter username //null
    password: null, //enter password
    email: null,
  });

  const validate = () => {
    var emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    // console.log(state.username, state.password, state.email);
    if (!state.username.length > 0) {
      //   setFormError({
      //     ...formError, // username:null,password:null,email:null,
      //     username: "Enter Username",
      //   });
      setFormError((prevState) => {
        return {
          ...prevState,
          username: "Enter Username",
        };
      });
    } else {
      setFormError((prevState) => {
        return {
          ...prevState,
          username: null,
        };
      });
    }
    if (!state.password.length > 0) {
      setFormError((prevState) => {
        return {
          ...prevState,
          password: "Enter Password",
        };
      });
    } else if (!(state.password.length > 4)) {
      setFormError((prevState) => {
        return {
          ...prevState,
          password: "Enter mini 4 char",
        };
      });
    } else if (state.password.length > 10) {
      setFormError((prevState) => {
        return {
          ...prevState,
          password: "Enter less then 10 char",
        };
      });
    } else {
      setFormError((prevState) => {
        return {
          ...prevState,
          password: null,
        };
      });
    }
    if (!state.email.length > 0) {
      setFormError((prevState) => {
        return {
          ...prevState,
          email: "Enter Email Id",
        };
      });
    } else if (!emailRegex.test(state.email)) {
      setFormError((prevState) => {
        return {
          ...prevState,
          email: "Enter Valid Email Id",
        };
      });
    } else {
      setFormError((prevState) => {
        return {
          ...prevState,
          email: null,
        };
      });
    }
  };
  return (
    <div>
      <Grid align="center">
        <Paper style={paperStyle}>
          <h3>Validation Form</h3>
          <br />
          <TextField
            helperText={formError.username}
            variant="outlined"
            label="User Name"
            error={formError.username}
            value={state.username}
            onChange={(e) => {
              setState({
                ...state,
                username: e.target.value,
              });
            }}
          />
          <br />
          <br />
          <TextField
            type="password"
            helperText={formError.password}
            variant="outlined"
            label="Password"
            error={formError.password}
            value={state.password}
            onChange={(e) => {
              setState({
                ...state,
                password: e.target.value,
              });
            }}
          />
          <br />
          <br />
          <TextField
            helperText={formError.email}
            variant="outlined"
            label="Email"
            error={formError.email}
            value={state.email}
            onChange={(e) => {
              setState({
                ...state,
                email: e.target.value,
              });
            }}
          />
          <br />
          <br />
          <Button variant="outlined" onClick={validate}>
            Register
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default FormValidation;
