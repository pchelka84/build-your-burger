import * as actiontTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actiontTypes.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: actiontTypes.AUTH_SUCCESS,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: actiontTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
  };
};
