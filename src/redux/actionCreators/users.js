import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSER, DELETEUSER } from "../actionTypes";

const url = domain + "/users";

// export const postUser = registerData => dispatch => {
//   return dispatch(_postUser(registerData)).then())=>
// dispatch(
//   login({
//     username: registerData.username,
//     password: registerData.password
//     })
//   )
// }
export const getUser = username => dispatch => {
  dispatch({
    type: GETUSER.START
  });

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETUSER.FAIL, payload: err }));
    });
};
export const deleteUser = () => (dispatch, getState) => {
  dispatch({
    type: DELETEUSER.START
  });
  const { username, token } = getState().auth.login.result;

  return fetch(url + "/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: DELETEUSER.FAIL, payload: err }));
    });
};
