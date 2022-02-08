import React from "react";
import Table from "./Table";
import userContext from "./UserContext";

class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: ["ID", "NAME", "EMAIL", "PHONE"],
    };
  }

  render() {
    return (
      <div className="container">
        <userContext.Consumer>
          {(contextData) => {
            console.log(contextData);
            return contextData.length > 0 ? (
              <Table
                header={this.state.header}
                data={[
                  contextData[0].id.name || 100,
                  contextData[0].name.first,
                  contextData[0].email,
                  contextData[0].phone,
                ]}
              />
            ) : (
              <div></div>
            );
          }}
        </userContext.Consumer>
      </div>
    );
  }
}

export default PersonalDetails;
