import { useContext } from 'react';
import { AllTaskContext } from '../context';

export default function useAllTask() {
  return useContext(AllTaskContext);
}
