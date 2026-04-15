import { useState } from 'react';
import { EditTaskContext } from '../context';

export default function EditTaskProvider({ children }) {
  const [editData, setEditData] = useState('');
  return (
    <>
      <EditTaskContext.Provider value={{ editData, setEditData }}>
        {children}
      </EditTaskContext.Provider>
    </>
  );
}
