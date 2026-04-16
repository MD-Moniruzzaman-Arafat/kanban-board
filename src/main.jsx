import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AllTaskProvider from './provider/AllTaskProvider.jsx';
import EditTaskProvider from './provider/EditTaskProvider.jsx';
import ModelProvider from './provider/ModelProvider.jsx';
import SearchProvider from './provider/SearchProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllTaskProvider>
      <EditTaskProvider>
        <ModelProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </ModelProvider>
      </EditTaskProvider>
    </AllTaskProvider>
  </StrictMode>
);
