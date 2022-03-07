import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import userReducer from "../Reducers/userReducer";
const combinedReducers = combineReducers({
  userReducer,
});

const store = createStore(combinedReducers, applyMiddleware(logger, thunk));
export default store;
