import React from "react";
import "./Home.css";

function Home(props) {
  return (
    <div className="mainContainer">
      <div className="subContainer">
        <h2 className="text-primary">React World</h2>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas
          facilis beatae, mollitia est voluptatum! Fuga distinctio nihil
          aperiam, perferendis iure doloremque esse consectetur sit labore!
          Reprehenderit sint consectetur dolores esse, officiis recusandae!
          Nemo, molestiae labore! Cumque at voluptatem suscipit.
        </p>
        <button className="btn btn-outline-primary">Explore More!!!</button>
      </div>
    </div>
  );
}

export default Home;
