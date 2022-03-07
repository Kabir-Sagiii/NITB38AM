import React, { useState, useEffect } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { updatUserData } from "../../Services/UserService";

const paperStyle = {
  width: "300px",
  padding: "50px",
  height: "60vh",
  margin: "30px auto",
};

function Edituser(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    city: "",
  });
  const { id } = useParams();
  //   alert(id);
  useEffect(() => {
    axios.get(`http://localhost:3131/User/getSpecUser/${id}`).then((res) => {
      console.log(res.data);
      setState({
        name: res.data.name,
        email: res.data.email,
        city: res.data.city,
      });
    });
  }, []);

  const updateUser = () => {
    updatUserData(state, id).then((res) => {
      alert(res.data);
    });
  };
  return (
    <div>
      <Grid align="center">
        <Paper style={paperStyle}>
          <h3>Update Here</h3>
          <TextField
            label="User Name"
            variant="standard"
            value={state.name}
            onChange={(e) => {
              setState({
                ...state,
                name: e.target.value,
              });
            }}
          />

          <TextField
            label="Email"
            variant="standard"
            value={state.email}
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
            value={state.city}
            onChange={(e) => {
              setState({
                ...state,
                city: e.target.value,
              });
            }}
          />

          <Button
            variant="contained"
            style={{ marginTop: "10px" }}
            onClick={updateUser}
          >
            Update
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default Edituser;
