// main--is the starting point that renders the app with providers//
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// global styles//
import './index.css' 
import App from './App.jsx'
import { AppProviders } from './AppProviders.jsx';  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
  
);
