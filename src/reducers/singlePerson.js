export const singlePersonReducer = (state = "", action) => {
  switch (action.type) {
    case "SETSINGLE":
      return action.payload;
    default:
      return state;
  }
};
