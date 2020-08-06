import { combineReducers } from "redux";
import courses from "./courseReducer"; // note we have aliased courseReducer as courses, since courseReducer is the default export

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
