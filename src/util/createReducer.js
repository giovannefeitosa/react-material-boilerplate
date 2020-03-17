/**
 * Helper to improve creation of reducers
 * 
 * @param {any} initialState 
 * @param {object} handlers 
 */
export default function createReducer(
  initialState,
  handlers,
) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };
}
