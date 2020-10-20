export const setSinglePerson = (event) => {
  return async (dispatch, getState) => {
    await dispatch({ type: "SETSINGLE", payload: event.target.value });
  };
};
