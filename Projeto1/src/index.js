import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeArea } from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeArea initialTheme="light">
    <App />
  </ThemeArea>
);