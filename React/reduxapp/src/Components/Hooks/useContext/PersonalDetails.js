import React, { useContext } from "react";
import Address from "./Address";
import userContext from "./userContext";

function PersonalDetails(props) {
  const contextData = useContext(userContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h2>Personal Details Component</h2>
            </div>
            <div className="card-body">
              <Address />
            </div>
            <div className="card-footer">
              <p>{contextData[0].name}</p>
              <p>{contextData[0].email}</p>
              <p>{contextData[0].phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
