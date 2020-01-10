import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETMESSAGES, CREATEMESSAGE } from "../actionTypes";
const url = domain + "/messages";

export const getMessages = username => dispatch => {
  dispatch({
    type: GETMESSAGES.START
  });
  const endpointUrl = username ? url + "?username=" + username : url;

  return fetch(endpointUrl, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETMESSAGES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETMESSAGES.FAIL, payload: err }));
    });
};

export const createMessage = messageText => (dispatch, getState) => {
  dispatch({
    type: CREATEMESSAGE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ text: messageText })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATEMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: CREATEMESSAGE.FAIL, payload: err })
      );
    });
};
