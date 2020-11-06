//resultReducer to take in an array and an action
const resultReducer = (state = [], action) => {
//if the action type is the one meant for this reducer, then return payload 
  if (action.type === "RESULT_REDUCER") {
    return action.payload;
  }
  //set payload to state
  return state;
};

//exporting resultReducer
export default resultReducer;
