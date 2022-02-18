const clientAction = (clientdata, dispatch) => {
  //   alert(clientdata);
  dispatch({
    type: "CLIENT",
    payload: clientdata,
  });
};

export default clientAction;
