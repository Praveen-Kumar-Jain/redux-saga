import * as types from "../actions/actionTypes";
export default function productReducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case types.ADDPRODUCT:
      return { ...state, counter: state.counter + 1 };
    case types.DELETEPRODUCT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
