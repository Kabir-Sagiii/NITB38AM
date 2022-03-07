const userReducer = (
  state = {
    user: [],
    post: [],
    comments: [],
  },
  action
) => {
  switch (action.type) {
    case "USER":
      state = {
        ...state,
        user: action.payload,
      };
  }
  return state;
};

export default userReducer;
