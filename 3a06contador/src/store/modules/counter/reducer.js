const resultReducer = (state = 0, action) => {
    console.log(action);
  
    switch (action.type) {
      case "ADD_NUMBER":
        const newState = state + action.number;
  
        return newState;
  
      case "SUB_NUMBER":
        if (state > 0) {
          return state - action.number;
        }
        return state;
  
      default:
        return state;
    }
  };
  
  export default resultReducer;