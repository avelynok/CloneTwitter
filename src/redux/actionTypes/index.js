const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

// auth
export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");
// users
export const GETUSER = createActionTypes("GETUSER");
export const POSTUSER = createActionTypes("POSTUSER");
export const DELETEUSER = createActionTypes("DELETEUSER");
// messages
export const GETMESSAGES = createActionTypes("GETMESSAGES");
export const POSTMESSAGE = createActionTypes("POSTMESSAGE");
