import firebase from "firebase";

export const signIn = (credentials) => {
  return (dispatch, getState) => {
    /* Use the Firebase authentication service to sign in with an
           email and password.*/
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_ERROR", error });
      });
  };
};
