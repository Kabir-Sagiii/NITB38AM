import React, { useEffect, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import axios from "axios";
import userContext from "./userContext";

function Home(props) {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setState(res.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <userContext.Provider value={state}>
            <PersonalDetails />
          </userContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Home;
