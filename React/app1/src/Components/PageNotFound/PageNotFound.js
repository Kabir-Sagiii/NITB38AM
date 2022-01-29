import React from "react";

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="container mt-5 text-center">
        <div className="row mt-5">
          <div className="col mt-5">
            <p className="display-1 text-danger">Page Not Found</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
