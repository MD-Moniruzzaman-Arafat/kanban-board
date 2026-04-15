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

    case 'todo':
      return {
        ...state,
        allTask: state.allTask.map((e) => {
          if (e.id === action.payload) {
            return { ...e, status: 'todo' };
          }
          return e;
        }),
      };

    case 'in-progress':
      return {
        ...state,
        allTask: state.allTask.map((e) => {
          if (e.id === action.payload) {
            return { ...e, status: 'in-progress' };
          }
          return e;
        }),
      };

    case 'done':
      return {
        ...state,
        allTask: state.allTask.map((e) => {
          if (e.id === action.payload) {
            return { ...e, status: 'done' };
          }
          return e;
        }),
      };
  }
};
