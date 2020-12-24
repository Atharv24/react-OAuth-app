import * as actions from "./userTypes";

export const login = (profile) => {
  return {
    type: actions.LOGIN,
    payload: profile,
  };
};

export const logout = () => {
  return {
    type: actions.LOGOUT,
  };
};
