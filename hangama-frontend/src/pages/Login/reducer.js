import { SET_USER_DATA } from "./actions";

const initialState = {
  userDetails: {},
};

const userValues = (state = initialState, action) => {
  console.log(action.type, "action.type");
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, userDetails: action.payload };

    default:
      return state;
  }
};
export default userValues;
