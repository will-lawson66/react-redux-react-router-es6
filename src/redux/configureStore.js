import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers"; //index.js is implied
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"; //middleware

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())) // add some middleware.  It will warn us if state mutates
  );
}
