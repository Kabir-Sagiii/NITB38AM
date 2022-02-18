import React, { useReducer } from "react";

const myReducer = (state, action) => {
  switch (action.type) {
    case "PERSONAL":
      state = {
        ...state,
        PersonalD: action.payload,
      };
      break;
    case "ADDRESS":
      state = {
        ...state,
        AddressD: action.payload,
      };
  }
  return state;
};

function User(props) {
  const [state, dispatch] = useReducer(myReducer, {
    PersonalD: {
      name: "S1",
      email: "S1@gmail.com",
    },
    AddressD: {
      city: "Banglore",
      Cstate: "KA",
    },
  });

  const updateData = () => {
    dispatch({
      type: "PERSONAL",
      payload: {
        name: "S2",
        email: "S2@gmail.com",
      },
    });
  };

  const updateAddress = () => {
    dispatch({
      type: "ADDRESS",
      payload: {
        city: "HYD",
        Cstate: "TS",
      },
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p>{state.PersonalD.name} </p>
          <p>{state.PersonalD.email}</p>

          <p>{state.AddressD.city}</p>
          <p>{state.AddressD.Cstate}</p>

          <button onClick={updateData}>Updat PDetails</button>
          <button onClick={updateAddress}>Updat Address</button>
        </div>
      </div>
    </div>
  );
}

export default User;
