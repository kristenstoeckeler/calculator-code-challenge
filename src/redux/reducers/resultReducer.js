const resultReducer = (state = [], action) => {
  if (action.type === "RESULT_REDUCER") {
    return action.payload;
  }
  return state;
};

export default resultReducer;
