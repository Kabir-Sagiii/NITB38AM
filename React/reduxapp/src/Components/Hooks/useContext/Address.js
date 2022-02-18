import React, { useContext } from "react";
import userContext from "./userContext";

function Address(props) {
  const data = useContext(userContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h2>Address Component</h2>
            </div>
            <div className="card-body">
              <p>{data[0].address.city}</p>
              <p>{data[0].address.street}</p>
              <p>{data[0].address.zipcode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
