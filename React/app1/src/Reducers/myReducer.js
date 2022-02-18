const myReducer = (state = { client: "", server: "" }, action) => {
  switch (action.type) {
    case "CLIENT":
      state = {
        ...state,
        client: action.payload,
      };
      break;
  }
  return state;
};

export default myReducer;
