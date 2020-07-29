import { combineReducers } from "redux";
import courses from "./courseReducer"; // note we have aliased courseReducer as courses

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
