import React, { useRef } from "react";

function Login(props) {
  const textRef = useRef();
  const passwordRef = useRef();

  const getData = () => {
    console.log(textRef.current.value, passwordRef.current.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card">
            <div className="card-header bg-danger text-white">
              <h2>Login Form</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <input
                  ref={textRef}
                  className="form-control"
                  type="text"
                  placeholder="Enter Name"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  ref={passwordRef}
                  className="form-control"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <button
                className="btn btn-outline-danger px-3 mt-2"
                onClick={getData}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
