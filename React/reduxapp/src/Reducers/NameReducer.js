import userData from "../InitialData/Initialdata";

const nameReducer = (state = userData, action) => {
  switch (action.type) {
    case "NAME":
      state = {
        ...state,
        user: action.payload,
      };
      break;
  }

  return state;
};

export default nameReducer;
