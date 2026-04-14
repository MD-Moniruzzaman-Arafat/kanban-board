import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AllTaskProvider from './provider/AllTaskProvider.jsx';
import ModelProvider from './provider/ModelProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllTaskProvider>
      <ModelProvider>
        <App />
      </ModelProvider>
    </AllTaskProvider>
  </StrictMode>
);
