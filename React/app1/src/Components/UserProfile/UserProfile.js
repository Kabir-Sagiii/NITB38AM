import React, { Component } from "react";
import { userData } from "./../../UserData";
import { emp } from "./../../emp";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: userData,
    };
  }

  updateUser = () => {
    this.setState({
      info: userData,
    });
  };

  updateEmployee = () => {
    this.setState({
      info: emp,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            excepturi sapiente praesentium, soluta officia consequatur numquam
            sed at itaque, repudiandae sint esse aliquid delectus repellat
            earum, placeat et! Sit adipisci magnam veritatis obcaecati quis
            necessitatibus, eveniet earum aut, quibusdam sequi amet minima harum
            nesciunt nihil nisi impedit nobis! Nostrum ad exercitationem rerum
            soluta quam tenetur dolor molestias, mollitia explicabo corrupti.
          </p>
        </div>
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={this.updateUser}>
              User Information
            </button>
          </div>
          <div className="col-4">
            <button className="btn btn-success" onClick={this.updateEmployee}>
              Employee Information
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <table className="table table-hover">
              <thead className="bg-dark text-white">
                <tr>
                  <th>IMAGE</th>
                  <th>NAME</th>
                  <th>GENDER</th>
                  <th>EMAIL</th>
                  <th>CITY</th>
                </tr>
              </thead>

              <tbody>
                {this.state.info.results.map(function (element) {
                  return (
                    <tr>
                      <td>
                        <img
                          src={element.picture.medium}
                          className="img-fluid"
                        />
                      </td>
                      <td>
                        {element.name.first} {element.name.last}
                      </td>
                      <td>{element.gender}</td>
                      <td>{element.email}</td>
                      <td>{element.location.city}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
