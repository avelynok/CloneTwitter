import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETMESSAGES, CREATEMESSAGE, DELETEMESSAGE} from "../actionTypes";
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

const _createMessage = messageText => (dispatch, getState) => {
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


//chained action creators
export const createMessage = (messageText) => (dispatch, getState) => {
  return dispatch(_createMessage(messageText)).then(() => dispatch(getMessages()))
}
const _deleteMessage = messageId => (dispatch, getState) => {
  dispatch({
    type: DELETEMESSAGE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url + "/" + messageId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: DELETEMESSAGE.FAIL, payload: err })
      );
    });
};

export const deleteMessage = messageId => (dispatch, getState) => {
  return dispatch(_deleteMessage(messageId)).then(() => {
    const username = getState().auth.login.result.username;
    const pathname = getState().router.location.pathname;
    if (pathname === "/messagefeed") {
      return dispatch(getMessages());
    }
    return dispatch(getMessages(username));
  });
};
