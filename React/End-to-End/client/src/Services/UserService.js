import axios from "axios";

export const sendUserDataToServer = (userData) => {
  return axios.post("http://localhost:3131/User/insertUserData", userData);
};

export const sendRequestToDeleteUser = (id) => {
  // alert("working");
  return axios.delete(`http://localhost:3131/User/delete/${id}`);
};

export const updatUserData = (userData, id) => {
  return axios.put(
    `http://localhost:3131/User/updateUserData/${id}`,
    {},
    {
      params: userData,
    }
  );
};
