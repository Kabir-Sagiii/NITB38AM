import React, { Component } from "react";
import Axios from "axios";

class AxiosUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: [],
    };
  }

  getData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        console.log(response.data);

        this.setState({
          userInfo: response.data,
        });
      },
      (errorMsg) => {
        console.log(errorMsg);
        alert("Error while fetching the data");
      }
    );
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              sequi molestias magnam veritatis corporis inventore illo fuga.
              Impedit quam ullam, accusamus officiis eveniet error minima autem
              libero aperiam assumenda voluptatum ut deleniti doloribus non
              optio quos totam nostrum sapiente enim qui deserunt. Dolorum unde,
              accusantium quibusdam saepe, velit ea soluta rerum quam earum
              optio adipisci ipsam molestiae repudiandae facilis quidem
              consequatur quos praesentium fugiat nisi ducimus repellat ad
              molestias quasi atque. Exercitationem voluptatem nisi rerum, quis
              dolorum corrupti incidunt itaque! Enim dolores porro ducimus
              voluptatum error laborum eius rem!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <button className="btn btn-primary" onClick={this.getData}>
              Get data from server
            </button>
          </div>
        </div>
        {this.state.userInfo.length > 0 ? (
          <div className="row mt-5">
            <div className="col">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>CITY</th>
                    <th>PHONE</th>
                    <th>COMPANY_NAME</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.userInfo.map(function (element, index) {
                    return (
                      <tr>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.address.city}</td>
                        <td>{element.phone}</td>
                        <td>{element.company.name}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-danger row mt-5">
            {" "}
            <h2> Data is not Available</h2>{" "}
          </div>
        )}
      </div>
    );
  }
}
export default AxiosUser;
