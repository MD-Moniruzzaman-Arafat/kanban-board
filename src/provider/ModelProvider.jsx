import { useState } from 'react';
import { ModalContext } from '../context';

export default function ModelProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ModalContext.Provider value={{ showModal, setShowModal }}>
        {children}
      </ModalContext.Provider>
    </>
  );
}
