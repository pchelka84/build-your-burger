import axios from "axios";

import * as actiontTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actiontTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actiontTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actiontTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_JoQedROh5AmwQh0Z66I8MAmbE-b_TBs";
    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_JoQedROh5AmwQh0Z66I8MAmbE-b_TBs";
    }

    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};
