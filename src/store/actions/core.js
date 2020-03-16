export const ActionCore = {
  SET_LOADING: 'SET_LOADING',
};

export function actSetLoading(isLoading = true) {
  return {
    type: ActionCore.SET_LOADING,
    value: isLoading,
  };
}
