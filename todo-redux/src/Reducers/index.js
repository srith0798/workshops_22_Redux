import { combineReducers } from "redux";
import { valueReducer } from "./reducers";
const rootReducer = combineReducers({
  valueReducer,
});

export default rootReducer;
