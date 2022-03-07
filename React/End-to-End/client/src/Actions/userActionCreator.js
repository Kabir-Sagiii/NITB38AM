const userActionCreator = (data) => {
  return (dispatch, getState) => {
    console.log(data);
    console.log("UserActionCreator", getState());
    if (!(getState().userReducer.user.length > 0)) {
      dispatch({
        type: "USER",
        payload: data,
      });
    } else {
      console.log("No need to call dispatch");
    }
  };
};

export default userActionCreator;
