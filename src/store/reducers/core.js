import { ActionCore } from '../actions/core';

const initialState = {
  loading: false,
};

export default function coreReducer(state = initialState, action) {
  switch (action.type) {
    case ActionCore.SET_LOADING:
      return {
        ...state,
        loading: action.value,
      };
    default:
      return state;
  }
}
