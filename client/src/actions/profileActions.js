import axios from "axios";
import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS } from "../actions/types";

// get current profile

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

//profile loading (no need for a payload)
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};
