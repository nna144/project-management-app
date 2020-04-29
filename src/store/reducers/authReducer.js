/* The reducer for any authentication actions. */

const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login failed");
      return {
        ...state,
        authError: "Login failed",
      };
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("Signout success");
      return state;
    default:
      return state;
  }
};

export default authReducer;
