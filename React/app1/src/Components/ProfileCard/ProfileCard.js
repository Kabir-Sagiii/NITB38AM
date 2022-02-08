import React from "react";
import axios from "axios";

class ProfileCard extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: [],
    };
  }

  componentDidMount() {
    this.getUserDataFromServer();
  }

  getUserDataFromServer = async () => {
    this.responsefromServer = await axios.get(
      "https://randomuser.me/api/?results=20"
    );
    console.log(this.responsefromServer);
    if (this.responsefromServer.status === 200) {
      this.setState({
        userInfo: this.responsefromServer.data.results,
      });
    } else {
    }
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h2>User Profiles</h2>
            <p className="text-primary mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              voluptatum quae rem quibusdam maxime ullam id vel maiores nisi
              quam voluptate doloribus fugit deserunt, asperiores delectus.
              Repudiandae magni cum reiciendis dolores cumque minus delectus
              laborum, dolor laudantium recusandae amet quas obcaecati sit et
              quisquam minima itaque corrupti numquam deserunt voluptates hic
              iure dolorem perferendis necessitatibus? Aliquam architecto,
              consectetur aut minus asperiores neque, facere voluptas hic odit
              eum voluptatem explicabo iste.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <button
              className="btn btn-outline-primary"
              onClick={this.getUserDataFromServer}
            >
              GetUser Profile
            </button>
          </div>
        </div>
        <div className="row mt-5">
          {this.state.userInfo.length > 0 ? (
            this.state.userInfo.map((ele, index) => {
              return (
                <div className="col-4 mt-3">
                  <div className="card">
                    <div className="card-header">
                      <img
                        src={ele.picture.medium}
                        width="100%"
                        height="100%"
                      />
                    </div>

                    <div className="card-body">
                      <h4>
                        {ele.name.first} {ele.name.last}
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et, nulla?
                      </p>
                      <button className="btn btn-primary">
                        Profile Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-danger text-center mt-5">
              {" "}
              <h3>Data is not available</h3>{" "}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCard;
