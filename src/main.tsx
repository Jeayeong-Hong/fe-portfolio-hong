// main.tsx
import * as React from 'react';
import { createRoot } from 'react-dom/client'; // 여기!
import App from './App';
import './style/index.css';

const root = document.getElementById('root')!;
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
