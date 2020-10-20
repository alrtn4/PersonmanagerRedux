export const setPerson = (person) => {
  return async (dispatch, getState) => {
    await dispatch({ type: "SET", payload: person });
  };
};
