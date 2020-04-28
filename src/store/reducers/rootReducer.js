import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer, // Sync our filestore to our state using filestoreReducer.
  firebase: firebaseReducer, // firebaseReducer does the authentication syncing between Firebase and the Redux state.
});

export default rootReducer;
