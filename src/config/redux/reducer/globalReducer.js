const initialState = {
  name: "hehe",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Rizkan",
    };
  }
  return state;
};


export default globalReducer;