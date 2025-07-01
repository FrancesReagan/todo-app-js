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

// notes on todo app as a whole: context api--instead of passing tasks or theme data through every component (like
// handing notes down a chain)---context lets any component grab what it needs directly.  useState: this is the 
// simplest way to manager this app's memory(tasks, filter, theme). localStorage--saves my work or user's work so I 
// or they don't lose it.  Try-catch---this protects the app from breaking--if something goes wrong with the 
// localStorage---the backup//