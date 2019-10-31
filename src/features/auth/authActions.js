import { LOGIN_USER, LOGOUT_USER } from "./authConstants";
import { closeModal } from "../modals/modalActions";

export const login = creds => {
  return dispatch => {
    dispatch({
      type: LOGIN_USER,
      paylaod: {
        creds
      }
    });
    dispatch(closeModal())
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER
  };
};
