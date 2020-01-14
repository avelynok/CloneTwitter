import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSER, DELETEUSER, CREATEUSER} from "../actionTypes";
import { push } from "connected-react-router";

const url = domain + "/users";


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
      return Promise.reject(dispatch({ type: CREATEUSER.FAIL, payload: err }));
    });
};

 const _createUser = (username,displayName, password) => (dispatch) => {
  dispatch({
    type: CREATEUSER.START
  });


  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({username, displayName,password})
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATEUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: CREATEUSER.FAIL, payload: err }));
    });
};

export const createUser = (username, displayName, password) => dispatch => {
  return dispatch(_createUser(username, displayName, password)).then(() =>{
  dispatch(push("/"))
  })
}