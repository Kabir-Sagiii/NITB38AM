import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import nameReducer from "../Reducers/NameReducer";
import cityReducer from "../Reducers/CityReducer";

const combinedReducer = combineReducers({
  nameReducer,
  cityReducer,
});

const myStore = createStore(combinedReducer, applyMiddleware(logger));

export default myStore;
