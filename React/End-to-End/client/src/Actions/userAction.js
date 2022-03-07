import store from "../Redux/Store";

const userAction = (data) => {
  store.dispatch({
    type: "USER",
    payload: data,
  });
};

export default userAction;
