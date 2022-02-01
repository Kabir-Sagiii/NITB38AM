import React from "react";
import PersonalDetails from "./PersonalDetails";
class Home extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="row">
                <div className="col-4">
                  <img src="" />
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col">
                      <PersonalDetails />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
