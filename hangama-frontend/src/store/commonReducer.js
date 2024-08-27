import { SET_USER_DATA } from "../pages/Login/actions";
// import { SET_LOADER } from "./actions";
const initialState = {
  loader: false,
  influencerDetails:{}
};
const commonReducer = (state = initialState, { type, payload, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };

    case "SET_LOADER":
      return { ...state, loader: payload };
      case "SET_USER_DATA":
        return { ...state, influencerDetails: payload };
  
    default:
      return state;
  }
};
export default commonReducer;
