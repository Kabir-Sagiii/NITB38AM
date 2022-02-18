import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const githubReducer = (
  state = {
    userDetails: {},
  },
  action
) => {
  switch (action.type) {
    case "GITHUBUSER":
      state = {
        ...state,
        userDetails: action.payload,
      };
  }
  return state;
};

export default githubReducer;
