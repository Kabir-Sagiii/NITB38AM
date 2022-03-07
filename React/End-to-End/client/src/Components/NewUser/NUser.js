import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import { sendUserDataToServer } from "../../Services/UserService";

const paperStyle = {
  width: "300px",
  padding: "50px",
  height: "70vh",
  margin: "30px auto",
};

function NUser(props) {
  const [state, setState] = useState({
    name: "",
    password: "",
    email: "",
    city: "",
  });

  const sendData = () => {
    console.log(state);
    sendUserDataToServer(state).then(
      (res) => {
        console.log(res);
        alert(res.data);
      },
      () => {
        alert("Error");
      }
    );
  };
  return (
    <div>
      <Grid align="center">
        <Paper style={paperStyle}>
          <h3>Register Here</h3>
          <TextField
            label="User Name"
            variant="standard"
            onChange={(e) => {
              setState({
                ...state,
                name: e.target.value,
              });
            }}
          />
          <TextField
            type="password"
            label="Password"
            variant="standard"
            onChange={(e) => {
              setState({
                ...state,
                password: e.target.value,
              });
            }}
          />
          <TextField
            label="Email"
            variant="standard"
            onChange={(e) => {
              setState({
                ...state,
                email: e.target.value,
              });
            }}
          />
          <TextField
            label="City"
            variant="standard"
            onChange={(e) => {
              setState({
                ...state,
                city: e.target.value,
              });
            }}
          />

          <Button
            onClick={sendData}
            variant="contained"
            style={{ marginTop: "10px" }}
          >
            Register
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default NUser;
