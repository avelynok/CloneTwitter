const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");
export const GETUSER = createActionTypes("GETUSER");
export const GETUSERS = createActionTypes("GETUSERS");
export const GETMESSAGES = createActionTypes("GETMESSAGES");
export const CREATEMESSAGE = createActionTypes("CREATEMESSAGE");
export const ADDLIKES = createActionTypes("ADDLIKES");
export const DELETEUSER = createActionTypes("DELETEUSER");
export const CREATEUSER = createActionTypes("CREATEUSER");
export const UPLOADPROFILEIMAGE = createActionTypes("UPLOADPROFILEIMAGE");
