import { useState } from 'react';
import { SearchContext } from '../context';

export default function SearchProvider({ children }) {
  const [searchItem, setSearchItem] = useState('');
  return (
    <SearchContext value={{ searchItem, setSearchItem }}>
      {children}
    </SearchContext>
  );
}
