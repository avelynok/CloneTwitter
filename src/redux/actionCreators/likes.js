import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import {ADDLIKES} from "../actionTypes";


const url = domain + "/likes";
export const addLikes = messageID => (dispatch, getState) => {
  dispatch({
    type: ADDLIKES.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ messageId: messageID })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADDLIKES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: ADDLIKES.FAIL, payload: err }));
    });
};
