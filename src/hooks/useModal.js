import { useContext } from 'react';
import { ModalContext } from '../context';

export default function useModal() {
  return useContext(ModalContext);
}
