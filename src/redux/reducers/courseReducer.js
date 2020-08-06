import * as types from "../actions/actionTypes";

//all reducers accept state and action as arguments
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }]; //copy state and add course; this is now the new state
    default:
      return state;
  }
}
