import React from "react";
import AddressDetails from "./AddressDetails";
import LoginDetails from "./LoginDetails";
import PersonalDetails from "./PersonalDetails";
import axios from "axios";
import userContext from "./UserContext";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=1").then(
      (res) => {
        console.log(res);
        this.setState({
          userData: res.data.results,
        });
      },
      () => {
        alert("Error while getting the data");
      }
    );
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="row">
                <div className="col-4">
                  <img
                    src={
                      this.state.userData.length > 0
                        ? this.state.userData[0].picture.medium
                        : ""
                    }
                    width="100%"
                    height="100%"
                  />
                </div>
                <userContext.Provider value={this.state.userData}>
                  <div className="col-8">
                    <div className="row">
                      <div className="col">
                        <PersonalDetails />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <AddressDetails />
                      </div>
                      <div className="col-6">
                        <LoginDetails />
                      </div>
                    </div>
                  </div>
                </userContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
