import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function User(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3131/User/getUserData").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2 className="text-warning">User Details</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            distinctio id deserunt eligendi ratione ipsum doloremque laborum
            suscipit numquam veritatis amet, expedita atque quaerat harum itaque
            tenetur soluta dolores voluptates sequi aliquam inventore
            temporibus. Aliquam eaque debitis deleniti ut dolorem quibusdam vel
            perspiciatis, neque possimus nostrum hic sapiente necessitatibus
            enim sunt recusandae corporis, architecto deserunt molestiae? Rerum
            illum sed eius, quod ab veritatis obcaecati quo. Magnam nisi nam
            quod quasi repudiandae unde? Magnam commodi accusantium possimus.
            Sequi esse ullam velit.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          {users.length > 0 ? (
            <table className="table table-hover mb-5">
              <thead className="table-dark text-white">
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>CITY</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((ele, index) => {
                  return (
                    <tr>
                      <td>{ele._id}</td>
                      <td>
                        {ele.name || (
                          <span className="text-danger">No data</span>
                        )}
                      </td>
                      <td>
                        {ele.email || (
                          <span className="text-danger">No data</span>
                        )}
                      </td>
                      <td>
                        {ele.city || (
                          <span className="text-danger">No data</span>
                        )}
                      </td>
                      <td>
                        <Link className="btn btn-warning" to="/edit">
                          Edit
                        </Link>
                      </td>
                      <td>
                        <Link className="btn btn-warning" to="/delete">
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="text-danger text-center mt-5">
              {" "}
              Data is not available{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
