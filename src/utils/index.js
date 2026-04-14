export const initialState = {
  allTask: [],
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'addTask':
      return {
        ...state,
        allTask: [...state.allTask, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};
