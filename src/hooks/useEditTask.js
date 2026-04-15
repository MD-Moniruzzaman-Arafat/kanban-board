import { useContext } from 'react';
import { EditTaskContext } from '../context';

export default function useEditTask() {
  return useContext(EditTaskContext);
}
