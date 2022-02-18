import React, { useEffect, useState } from "react";

const Effect = () => {
  const [state, setState] = useState("ComponentDidMount");
  const [des, setDes] = useState("This is React Related Stuff");
  const [title, setTitle] = useState("React");

  useEffect(() => {
    console.log(state);
  }, [des, title]);

  useEffect(() => {
    console.log("2nd UseEffect");
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-4"> </div>
        <div className="col-4">
          <h2 className="display-6">{state}</h2>
          <h3>{title}</h3>
          <p className="lead">{des}</p>
          <button
            className="btn mt-3 btn-outline-primary"
            onClick={() => {
              setState("ComponentDidUpdate");
              //   setTitle("React JS");
            }}
          >
            Update State
          </button>
        </div>
      </div>
    </div>
  );
};

export default Effect;
