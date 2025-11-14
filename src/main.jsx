// client/src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// AOS Imports
import AOS from 'aos';
import 'aos/dist/aos.css'; // The default AOS styles

// Initialize AOS globally here
AOS.init({
  duration: 800, // Duration of animation
  once: true,    // Whether animation should happen only once - true for corporate sites
  mirror: false, // Whether elements should animate back out on scroll
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)