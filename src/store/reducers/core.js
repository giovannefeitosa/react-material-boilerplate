import { ActionCore } from 'store/actions/core';
import createReducer from 'util/createReducer';

const initialState = {
  loading: false,
};

export default createReducer(initialState, {
  // Set full page loading
  [ActionCore.SET_LOADING]: (state, action) => ({
    ...state,
    loading: action.value
  }),
});
