import React from "react";

class Address extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-success text-white">
                <h2>Address Component</h2>
              </div>
              <div className="card-body">
                <p>City:{this.props.city}</p>
                <p>State:{this.props.state} </p>
                {/* <p>City:{this.props.data.city}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Address;
