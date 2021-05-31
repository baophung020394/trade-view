import { combineReducers } from "redux";
import marketReducer from "./market";

const rootReducer = combineReducers({
  market: marketReducer,
});
export default rootReducer;
