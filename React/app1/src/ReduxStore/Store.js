import { createStore, combineReducers, applyMiddleware } from "redux";
import nameReducer from "../Reducers/NameReducer";
import myReducer from "../Reducers/myReducer";
import logger from "redux-logger";

const combinedReducers = combineReducers({
  nameReducer,
  myReducer,
});

var myStore = createStore(combinedReducers, applyMiddleware(logger));
export default myStore;
