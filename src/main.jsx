// main--is the starting point that renders the app and wraps it with the providers//
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

// more notes on Main.jsx---finds the root element in the HTML file (like a blank canvas)---
// renders the App inside AppProviders, which gives it access to all contexts.----
// StrictMode--is a react tool that helps catch mistakes in my code.--//