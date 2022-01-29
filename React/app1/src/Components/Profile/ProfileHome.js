import React from "react";
import Profile from "./Profile";

class ProfileHome extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Profile
              imgurl="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              name="Chris"
              description="I am Software Enginner"
            />
          </div>
          <div className="col-4">
            <Profile
              imgurl="https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              name="Aliya"
              description="I am Frontend Enginner"
            />
          </div>
          <div className="col-4">
            <Profile
              imgurl="https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              name="Ziya"
              description="I am Fullstack Developer"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileHome;
