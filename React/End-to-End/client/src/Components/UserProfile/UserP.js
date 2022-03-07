import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import userAction from "../../Actions/userAction";
import userActionCreator from "../../Actions/userActionCreator";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

function UserP(props) {
  const [state, setState] = useState([]);
  let dispatch = useDispatch((dispatch) => {
    return dispatch;
  });

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10").then(
      (res) => {
        console.log(res.data.results);
        setState(res.data.results);
        // userAction(res.data.results);
        bindActionCreators(userActionCreator, dispatch)(res.data.results);
        // userActionCreator(res.data.results)();
      },
      (err) => {
        alert("Error while getting the data");
      }
    );

    // return () => {
    //   alert("I will unmount");
    // };
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <p className="lead text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi
          molestias adipisci quos quaerat in voluptatem repudiandae architecto
          culpa perferendis amet error, itaque reiciendis harum consequatur quia
          id eum odit. Et nesciunt ipsa consectetur maiores perspiciatis quaerat
          dolores aut illum ea aliquid autem enim culpa aspernatur molestiae
          deleniti excepturi, est exercitationem, sunt voluptatem earum
          blanditiis cupiditate hic, vel mollitia. Est placeat distinctio beatae
          culpa asperiores exercitationem dignissimos hic autem ab quo laborum
          ducimus perferendis itaque modi, et tenetur a omnis neque
          necessitatibus atque nisi mollitia velit! Minima repellat corrupti
          dolor.
        </p>
      </div>

      <div className="row mt-5">
        <div className="col">
          {state.length > 0 ? (
            <table className="table table-hover">
              <thead className="table-primary">
                <tr>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {state.map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{element.name.first}</td>
                      <td>{element.email}</td>
                      <td>{element.phone}</td>
                      <td>
                        <Link
                          className="btn btn-outline-primary"
                          to={`/details/${element.phone}`}
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="text-danger text-center">
              {" "}
              <h2>Data is not Available</h2>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserP;
