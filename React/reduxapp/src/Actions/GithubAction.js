import githubStore from "../ReduxStore/Githubstore";
const githubAction = (data) => {
  githubStore.dispatch({
    type: "GITHUBUSER",
    payload: data,
  });
};

export default githubAction;
