import React from "react";

class ProfileState extends React.Component {
  constructor() {
    super();

    this.state = {
      url: "https://images.pexels.com/photos/2235831/pexels-photo-2235831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Burger",
      description: "IT is delicious Burger",
    };
  }
  updateData = () => {
    this.setState({
      url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Noodles",
      description: "It is tasty Noodles",
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="card">
              <div className="card-header">
                <img className="img-fluid" src={this.state.url} />
              </div>
              <div className="card-body">
                <h3>{this.state.title}</h3>
                <p>{this.state.description}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-outline-dark"
                  onClick={this.updateData}
                >
                  Update Information
                </button>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}

export default ProfileState;
