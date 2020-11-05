const calculationReducer = (state = {}, action) => {

  if (action.type === "CALCULATION_REDUCER") {
    return action.payload;
  }
  return state;
};

export default calculationReducer;
