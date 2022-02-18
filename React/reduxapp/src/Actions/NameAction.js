import myStore from "../ReduxStore/Store";

const nameAction = (name) => {
  //   alert(name);
  myStore.dispatch({
    type: "NAME",
    payload: name,
  });
};

export default nameAction;
