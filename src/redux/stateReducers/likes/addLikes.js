import { ADDLIKES } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs"

const initialState = {
  result: null,
  loading: false,
  error: null
};

const addLikes = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default withAsyncReducer(ADDLIKES, addLikes);
