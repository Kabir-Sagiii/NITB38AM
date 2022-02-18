import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import githubReducer from "../Reducers/GithubReducer";

const combinedReducer = combineReducers({
  githubReducer,
});

const githubStore = createStore(combinedReducer, applyMiddleware(logger));
export default githubStore;
