import { useReducer } from 'react';
import { AllTaskContext } from '../context';
import { initialState, taskReducer } from '../reducer/taskReducer';

export default function AllTaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <>
      <AllTaskContext.Provider value={{ state, dispatch }}>
        {children}
      </AllTaskContext.Provider>
    </>
  );
}
