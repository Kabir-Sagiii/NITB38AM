import React, { useState } from "react";

function State() {
  const [title, setTitle] = useState("React");
  const [description, setDescription] = useState(
    "React is JS Library to create efficient UI"
  );

  const updateData = () => {
    setTitle("React JS");
    setDescription("React Develops SPA");
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={updateData}>Update State</button>
    </div>
  );
}

export default State;
