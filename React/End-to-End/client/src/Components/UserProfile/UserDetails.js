import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // connect
import { useParams } from "react-router-dom";

function UserDetails(props) {
  const { id } = useParams();
  const [state, setState] = useState([]);

  const storeData = useSelector((storeData) => {
    return storeData;
  });

  useEffect(() => {
    alert("working");
    let filteredData = storeData.userReducer.user.filter((ele) => {
      return ele.phone === id;
    });
    setState(filteredData);
  }, []);

  console.log(id);
  console.log(storeData);
  return (
    <div className="container mt-5">
      {alert(state.length)}
      <div className="row">
        <div className="col">
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <img
                  src={state.length > 0 ? state[0].picture.medium : ""}
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="col-8">
                <h2>{state.length > 0 ? state[0].name.first : ""}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
