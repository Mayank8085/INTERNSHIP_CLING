import { SET_LOADER } from "./actions";
const initialState = {
  loader: false,
};
const commonReducer = (state = initialState, { type, payload, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };

    case SET_LOADER:
      return { ...state, loader: payload };

    default:
      return state;
  }
};
export default commonReducer;
