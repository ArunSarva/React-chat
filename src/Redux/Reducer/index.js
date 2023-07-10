import {LOADER} from "../Action";

const initialState = { 
  getLoader: false,
};

export default function GlobalReducer(state = initialState, action) {
  switch (action.type) {
    case LOADER:
      console.log(action.payload,"arun 1")
      return { ...state, getLoader: action.payload };
    default:
      return state;
  }
}
